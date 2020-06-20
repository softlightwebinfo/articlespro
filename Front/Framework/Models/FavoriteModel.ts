export class FavoriteModel {
    /* Generate attributes for class*/
    private _id: number;

    /* Generate getters */
    public getId(): number {
        return this._id;
    }

    /* Generate getters */
    public setId(id: number): void {
        this._id = id;
    }

}


export class Favoritesmodel {
    /* Generate attributes for class*/
    private _result: { [p: string]: FavoriteModel };
    private _count: number;

    constructor(result: any, count: any) {
        this._result = result;
        this._count = count;
    }

    public hasKey(key: number) {
        return key in this._result;
    }

    public getCount() {
        return this._count;
    }

    static init(data: { result, count }) {
        return new Favoritesmodel(
            data.result,
            data.count
        );
    }
}
