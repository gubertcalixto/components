export class VsKanbanCard {
    id?: string | number;
    title: string;
    description?: string;
    // todo teste if true as default
    canMove ?= true;
    canDelete?: boolean;
    data?: any;

    constructor(card?: VsKanbanCard) {
        this.id = card.id || this.title;
        this.title = card.title;
        this.description = card.description;
        this.canMove = typeof card.canMove === 'boolean' ? card.canMove : true;
        this.canDelete = card.canDelete;
        this.data = card.data;
    }
}
