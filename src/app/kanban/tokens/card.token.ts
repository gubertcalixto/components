export class VsKanbanCard {
    id?: string | number;
    title: string;
    description?: string;
    // TODO teste if true as default
    canMove?= true;
    data?: any;

    constructor(card?: VsKanbanCard) {
        this.id = card.id || this.title;
        this.title = card.title;
        this.description = card.description;
        this.canMove = typeof card.canMove === 'boolean' ? card.canMove : true;
        this.data = card.data;
    }
}
