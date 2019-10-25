import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

import { VsKanbanCard } from '../tokens/card.token';

@Component({
  selector: 'vs-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanCardComponent {
  /**
   * Define o template do cardHeader\
   * **Default**\
   * ```
   * <ng-template #template let-title="title">{{title}}</ng-template>
   * ```
   * **Variáveis disponíveis:**
   * - card
   */
  @Input() cardHeaderTemplate: TemplateRef<any>;
  /**
   * Define o template do cardBody\
   * **Default**\
   * ```
   * <ng-template #template let-description="description">{{description}}</ng-template>
   * ```
   * **Variáveis disponíveis:**
   * - card
   */
  @Input() cardBodyTemplate: TemplateRef<any>;
  /**
   * Define o template do cardFooter\
   * **Default** None\
   * **Variáveis disponíveis:**
   * - card
   */
  @Input() cardFooterTemplate: TemplateRef<any>;
  /**
   * Define o template do card ao ser arrastado (float card)\
   * **Default** None\
   * **Variáveis disponíveis:**
   * - card
   */
  @Input() cardDragPlaceholderTemplate: TemplateRef<any>;

  @Input() card: VsKanbanCard;
}