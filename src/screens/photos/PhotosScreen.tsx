import React, { FunctionComponent, useEffect } from 'react'
import { ITEMS_PER_PAGE } from '../../constants';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchPhotos, setPhotosPage } from '../../store/thunks/photo-thunk';
import { Photo } from '../../types/photos';
import { PhotosSearch } from './components/PhotosSearch/PhotosSearch';
import { Pagination } from '../../components/Pagination/Pagination';
import { PhotoItem } from './components/PhotoItem/PhotoItem';
import { Spinner } from '../../components/Spinner';
import { AlbumFilter } from './components/AlbumFilter/AlbumFilter'
import { photosSelector } from '../../store/selectors/photos';
import { useDispatch } from '../../hooks/dispatch';
import { filterItemsByPage } from '../../utils';

export const PhotosScreen: FunctionComponent = () => {
    const {loading, photos, photosParams, page} = useTypedSelector(photosSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPhotos(photosParams))
    }, [photosParams]);

    const onPageChange = (page: number) => {
        dispatch(setPhotosPage(page + 1))
    };

    return (
      <div className='row pb-4'>
        <div className='col-12 col-md-4'>
            {/* Filter */}
            <AlbumFilter />
        </div>
        <div className='col-12 col-md-8'>
          <div className=''>
            {/* Search */}
            <PhotosSearch />

            {/* Content */}
            {loading ? (
                <div className='p-4'>
                    <Spinner color='text-primary' />
                </div>
            ) : (photos.length) ? (
                <div className='row'>
                    <>
                        {filterItemsByPage(photos, page).map((photo: Photo, index: number) => {
                            return (
                                <div key={index} className='col-12 col-sm-6 col-lg-4 mb-4 d-flex flex-column'>
                                    <PhotoItem photo={photo} />
                                </div>
                            )
                        })}
                    </>
                </div>
            ) : (
                <div className='text-center'>No Results</div>
            )}

            {/* Pagination */}
            {(photos?.length > ITEMS_PER_PAGE) && (!loading) && (
                <Pagination
                    length={photos.length}
                    onPageChange={(page) => onPageChange(page)}/>
            )}
          </div>
        </div>
      </div>
    )
}
