import React, { FunctionComponent } from 'react'
import ReactPaginate from 'react-paginate';
import { ITEMS_PER_PAGE } from '../../constants';

export interface PaginationProps {
    length: number
    onPageChange?: (selectedPage: number) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({length, onPageChange}) => {
    const pages = Math.ceil(length / ITEMS_PER_PAGE);

    const handlePageClick = (selectedItem: { selected: number }) => {
        if (onPageChange) {
            onPageChange(selectedItem.selected);
        }
    };

    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                initialPage={0}
                marginPagesDisplayed={2}
                pageCount={pages}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
                className='pagination justify-content-center'
                pageClassName='page-item'
                breakClassName='page-item'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
                previousClassName='page-item prev'
                nextClassName='page-item next'
                activeClassName='page-item active'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
            />
        </div>
    )
}
