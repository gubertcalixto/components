export class VsKanbanList {
    id?: string | number;
    title: string;
    icon?: string;
    data?: any;
    hasAddAction?: boolean;
    hasDeleteAction?: boolean;

    constructor(list?: VsKanbanList) {
        this.id = list.id || this.title;
        this.title = list.title;
        this.icon = list.icon;
        this.data = list.data;
        this.cards = list.cards || [];
        this.hasAddAction = list.hasAddAction;
        this.hasDeleteAction = list.hasDeleteAction;
    }
}