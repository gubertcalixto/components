import { CollectionViewer, ListRange } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { VsKanbanService } from '../kanban.service';
import { VsKanbanCard } from './card.token';

export class VsKanbanDataSource extends DataSource<string | undefined> {
  public kanbanService: VsKanbanService;
  public pageSize: number;
  public listId: string | number;
  public totalCount = 0;

  private cachedData: any[] = [];
  private cachedPages = new Set<number>();
  private dataStream = new BehaviorSubject<(string | undefined)[]>(Array.from<string>({ length: 1 }));
  private subscriptions: Subscription[] = [];

  constructor(initialKanbanService: VsKanbanService, initialListId: string | number, initialPageSize: number) {
    super();
    this.kanbanService = initialKanbanService;
    this.listId = initialListId;
    this.pageSize = initialPageSize;
  }

  public connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]> {
    this.subscriptions.push(collectionViewer.viewChange.subscribe((range: ListRange) => {
      const pageStart = this.getPageForIndex(range.start);
      const pageEnd = this.getPageForIndex(range.end - 1);
      this.getCards(pageStart, pageEnd);
    }));
    return this.dataStream;
  }

  public disconnect(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private getCards(pageStart: number, pageEnd: number): void {
    let needToRequest = false;
    for (let i = pageStart; i <= pageEnd; i++) {
      if (!this.cachedPages.has(i)) {
        needToRequest = true;
        break;
      }
    }
    if (!needToRequest) {
      return;
    }
    const range = this.getItemsRange(pageStart, pageEnd);
    const skipCount = range.start;
    const pageSize = range.end - range.start;
    console.log('=========== NEW SEARCH ===========');
    console.log(`Pesquisando de ${skipCount + 1} até ${skipCount + pageSize}`);

    this.subscriptions.push(this.kanbanService.getCards(this.listId, skipCount, pageSize).subscribe(result => {
      this.totalCount = result.totalCount;
      this.initCachedData();
      this.cachedData.splice(skipCount, pageSize, ...result.items);
      this.dataStream.next(this.cachedData);
    }));
  }

  private getItemsRange(pageStart: number, pageEnd: number): ListRange {
    for (let i = pageStart; i <= pageEnd; i++) {
      if (this.cachedPages.has(i)) {
        if (pageStart === i) {
          pageStart += 1;
        } else if (pageEnd === i) {
          pageEnd -= 1;
        }
      } else {
        this.cachedPages.add(i);
      }
    }
    return {
      start: pageStart * this.pageSize,
      end: pageEnd <= pageStart ? pageStart * this.pageSize + this.pageSize : (1 + pageEnd) * this.pageSize
    } as ListRange;
  }

  private initCachedData() {
    if (!this.cachedData || this.cachedData.length !== this.totalCount) {
      this.cachedData = Array.from<string>({ length: this.totalCount });
    }
  }

  addItem(item: VsKanbanCard, index: number) {
    this.cachedData.splice(index, 0, item);
    this.dataStream.next(this.cachedData);
  }

  removeItem(index: number) {
    this.cachedData.splice(index, 1);
    this.dataStream.next(this.cachedData);
  }
}
