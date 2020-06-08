import {TFormInputType} from "../interfaces/TFormInputType";
import {FormComponent} from "../FormComponent";

export class FormInput extends FormComponent {
    private readonly _name: string;
    private readonly _title: string;
    private readonly _type: TFormInputType;
    private _required: boolean = true;
    private _autoFocus: boolean = false;
    private _onChange: (e: any, component: this) => void;

    constructor(name: string, title: string, type: TFormInputType = "text") {
        super();
        this._name = name;
        this._title = title;
        this._type = type;
        return this;
    }

    get name(): string {
        return this._name;
    }

    get title(): string {
        return this._title;
    }

    get type(): TFormInputType {
        return this._type;
    }

    get required(): boolean {
        return this._required;
    }

    get autoFocus(): any {
        return this._autoFocus;
    }

    get onChange(): (e: any, component: this) => void {
        return this._onChange;
    }

    set onChange(value: (e: any, component: this) => void) {
        this._onChange = value;
    }

    SetAutoFocus(autoFocus: boolean): this {
        this._autoFocus = autoFocus;
        return this;
    }

    setRequired(required: boolean) {
        this._required = required;
        return this;
    }
}
