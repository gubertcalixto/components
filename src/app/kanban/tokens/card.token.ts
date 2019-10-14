export class VsKanbanCard {
    id?: string | number;
    title: string;
    description?: string;
    canMove?: boolean;
    canDelete?: boolean;
    data?: any;

    constructor(card?: VsKanbanCard) {
        this.title = card.title;
        this.id = card.id || this.title;
    }
}
