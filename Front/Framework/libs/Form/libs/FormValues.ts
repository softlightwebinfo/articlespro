import {FormChange} from "./FormChange";

export class FormValues {
    private _data: Map<string, FormChange>;

    constructor() {
        this._data = new Map();
    }

    Add(data: FormChange) {
        this._data.set(data.name, data);
    }
}
