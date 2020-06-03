export class MenuModel {
    private _icon: any;
    private _name: string;
    private _route: string;
    get route(): string {
        return this._route;
    }

    set route(value: string) {
        this._route = value;
    }

    get icon(): any {
        return this._icon;
    }

    set icon(value: any) {
        this._icon = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(name: string, icon: any, route: string) {
        this._name = name;
        this._icon = icon;
        this._route = route;
    }
}
