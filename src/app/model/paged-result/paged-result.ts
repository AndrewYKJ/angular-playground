export class PagedResult<T> {
    total: number;
    data?: Array<T>;

    constructor(result: Array<T>, total: number) {
        this.data = result;
        this.total = total;
    }
}
