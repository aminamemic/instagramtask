export interface ISearchBox{

    generateSearchRequest(): any;

    search(reloadPaginator: boolean): void;

    paginatorChanged(event: Event): void;

    skip(): number;

    evaluatePaginatorPage(totalItems: number, itemsPerPage: number, currentPage: number): number;

}
