import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux';
import { ITEMS_PER_PAGE } from '../constants';
import { setPhotosPage } from '../store/thunks/photo-thunk';
import { Photo } from '../types/photos'

export interface PaginationProps {
    contentItems: Array<Photo>
    current: number
}

export const Pagination: FunctionComponent<PaginationProps> = ({contentItems, current}) => {
    const dispatch = useDispatch<any>() //todo: check type
    const setPage = (e: React.MouseEvent<HTMLElement>, page: number) => {
        e.preventDefault();
        dispatch(setPhotosPage(page))
    };

    const pages = Math.ceil(contentItems.length / ITEMS_PER_PAGE);
    const isFirst = current === 1;
    const isLast = current === pages;

    return (
        <div>
            <nav aria-label="Album navigation">
                <ul className="pagination justify-content-center">
                    {!isFirst && (pages > 5) && (
                        <li className="page-item"><a className="page-link" href="#" onClick={e => setPage(e, current - 1)}>Prev</a></li>
                    )}

                    {/* first page */}
                    <li className="page-item">
                        <a className={"page-link " + (isFirst ? "active" : "" )} href="#" onClick={e => setPage(e, 1)}>1</a>
                    </li>

                    {/* short vertion */}
                    {(pages <= 5) && ([...Array(pages - 2)].map((item, index) => {
                        return (
                                <li className="page-item" key={index}>
                                    <a
                                        className={"page-link " + ((current === index + 2) ? "active" : "" )}
                                        onClick={e => setPage(e, index + 2)}
                                        href="#">
                                        {index + 2}
                                    </a>
                                </li>
                            )
                        })
                    )}

                    {(pages > 5) && (current > 3) && (
                        <li className="page-item disabled d-none d-sm-block">
                            <div className="page-link">...</div>
                        </li>
                    )}

                    {/* 3 first pages */}
                    {(pages > 5) && (current <= 2) && ([2,3,4].map((item, index) => {
                        return (
                                <li className="page-item" key={index}>
                                    <a
                                        className={"page-link " + ((current === item) ? "active" : "" )}
                                        onClick={e => setPage(e, item)}
                                        href="#">
                                        {item}
                                    </a>
                                </li>
                            )
                        })
                    )}

                    {/* 3 middle pages */}
                    {(pages > 5) && (current > 2) && (current < pages - 2) && ([current - 1, current,  current + 1].map((item, index) => {
                        return (
                                <li className="page-item" key={index}>
                                    <a
                                        className={"page-link " + ((current === item) ? "active" : "" )}
                                        onClick={e => setPage(e, item)}
                                        href="#">{item}</a>
                                </li>
                            )
                        })
                    )}

                    {/* 3 last pages */}
                    {(pages > 5) && (current >= pages - 2) && ([pages - 3, pages - 2, pages -1].map((item, index) => {
                        return (
                                <li className="page-item" key={index}>
                                    <a
                                        className={"page-link " + ((current === item) ? "active" : "" )}
                                        onClick={e => setPage(e, item)}
                                        href="#">
                                        {item}
                                    </a>
                                </li>
                            )
                        })
                    )}

                    {(pages > 5) && (current < pages - 2) && (
                        <li className="page-item disabled d-none d-sm-block">
                            <div className="page-link">...</div>
                        </li>
                    )}

                    {/* last page */}
                    <li className="page-item">
                        <a className={"page-link " + (isLast ? "active" : "")} href="#" onClick={e => setPage(e, pages)}>{pages}</a>
                    </li>

                    {!isLast && (pages > 5) && (
                        <li className="page-item"><a className="page-link" href="#" onClick={e => setPage(e, current + 1)}>Next</a></li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
