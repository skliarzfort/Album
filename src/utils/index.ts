import { ITEMS_PER_PAGE } from "../constants";

export const filterItemsByPage = (items: any[], page: number) => {
    return items.filter((item, index) => {
        const itemIndexMoreThanPrevPage = index >= ((page * ITEMS_PER_PAGE) - ITEMS_PER_PAGE);
        const itemIndexLessThanNextPage = index < page * ITEMS_PER_PAGE;
        return itemIndexMoreThanPrevPage && itemIndexLessThanNextPage;
    });
}