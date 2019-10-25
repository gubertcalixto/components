import { KanbanInternalListEventEnum } from './kanban-list-event.enum';

export interface IKanbanInternalListEvent {
    listId: string | number;
    type: KanbanInternalListEventEnum;
    data: any;
}
