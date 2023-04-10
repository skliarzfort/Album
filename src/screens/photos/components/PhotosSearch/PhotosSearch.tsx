import React, { FunctionComponent, useState } from 'react'
import styles from './PhotosSearch.module.scss'; 
import { setPhotosParams } from '../../../../store/thunks/photo-thunk';
import { useDispatch } from '../../../../hooks/dispatch';
import classNames from 'classnames';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { photosSelector } from '../../../../store/selectors/photos';

export const PhotosSearch: FunctionComponent = () => {
    const {photosParams} = useTypedSelector(photosSelector);
    const dispatch = useDispatch()
    const [input, setInput] = useState('');

    const deleteSearchParams = () => {
        const updatedParams = Object.assign({}, photosParams);
        delete updatedParams.title_like;
        dispatch(setPhotosParams(updatedParams));
    }

    const handleSearchParams = () => {
        if (input.length && photosParams?.title_like === input) return;

        if (input.length) {
            const updatedParams = Object.assign({}, photosParams);
            updatedParams.title_like = input;
            dispatch(setPhotosParams(updatedParams));
        } else if (photosParams?.title_like?.length) {
            deleteSearchParams();
        }
    };

    const handleDeleteSearchParams = () => {
        deleteSearchParams();
        setInput('');
    };

    return (
        <>
            <div className={classNames(styles['album-search'], 'input-group mb-3')}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search photos by Title"
                    aria-label="Recipient's username"
                    value={input}
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSearchParams();
                        }
                    }}
                    onChange={e => setInput(e.target.value)} />
                {(photosParams?.title_like?.length) && (
                    <button
                        type="button"
                        className={classNames(styles['album-search__delete'], 'btn-close')}
                        onClick={handleDeleteSearchParams}
                        aria-label="Reset search"></button>
                )}
                <button
                    onClick={handleSearchParams}
                    className="btn btn-outline-primary"
                    type="button">
                    Search
                </button>
            </div>
            <div className="alert alert-info" role="alert">
                <b>Common words</b>: <i>laboriosam, nobis, perferendis, laudantium, debitis, ducimus, quibusdam</i>.
            </div>
        </>
    )
}
