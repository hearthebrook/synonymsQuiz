export interface Item {
    id: string
    item: string
    correct: boolean
}

export default class answerItem implements Item {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _correct: boolean = false,
    ) {}
    
    get id(): string {
        return this._id
    }
    set id(id: string) {
        this._id = id;
    }

    get item(): string {
        return this._item
    }
    set item(item: string) {
        this._item = item;
    }

    get correct(): boolean {
        return this._correct
    }
    set correct(correct: boolean) {
        this._correct = correct;
    }

}