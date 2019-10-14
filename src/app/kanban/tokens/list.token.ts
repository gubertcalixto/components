export class VsKanbanList {
    id?: string | number;
    title: string;
    icon?: string;
    data?: any;
    idCards?: string[] = [];
    hasAddAction?: boolean;
    hasDeleteAction?: boolean;

    constructor(list?: VsKanbanList) {
        this.title = list.title;
        this.id = list.id || this.title;
        this.idCards = [];
    }
}
