export class FormComponent {
    protected _col_xs: number = 12;

    get col_xs(): number {
        return this._col_xs;
    }

    public setColXs(value: number) {
        this._col_xs = value;
        return this;
    }

    constructor() {

    }

}
