import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ITEMS_PER_PAGE } from '../constants';
import { useTypedSelector } from '../hooks/useTypedSelector'
import { store } from '../store';
import { fetchPhotos } from '../store/thunks/photo-thunk';
import { Photo } from '../types/photos';
import { AlbumSearch } from './AlbumSearch';
import { Pagination } from './Pagination';
import { PhotoItem } from './PhotoItem';
import { Spinner } from './Spinner';
import { AlbumFilter } from './AlbumFilter'

type StoreState = ReturnType<typeof store.getState>;
const getPhotosState = (state: StoreState) => state.photos;

export const Album: FunctionComponent = () => {
  const {loading, photos, photosParams, page} = useTypedSelector(getPhotosState);
  const dispatch = useDispatch<any>() //todo: check type

  useEffect(() => {
      dispatch(fetchPhotos(photosParams))
  }, [photosParams]);

    return (
      <div className='row pb-4'>
        <div className='col-12 col-md-4'>
            <AlbumFilter photosParams={photosParams} />
        </div>
        <div className='col-12 col-md-8'>
          <div className=''>
            {/* Search */}
            <AlbumSearch photosParams={photosParams} />

            {/* Content */}
            {loading ? (
                <div className='p-4'>
                    <Spinner color='text-primary' />
                </div>
            ) : (photos.length) ? (
                <div className='row'>
                    <>
                        {photos?.map((photo: Photo, index) => {
                            if ((index >= ((page * ITEMS_PER_PAGE) - ITEMS_PER_PAGE)) && (index < page * ITEMS_PER_PAGE)) {
                                return (
                                    <div key={index} className='col-12 col-sm-6 col-lg-4 mb-4 d-flex flex-column'>
                                        <PhotoItem photo={photo} />
                                    </div>
                                )
                            }
                        })}
                    </>
                </div>
            ) : (
                <div className='text-center'>No Results</div>
            )}

            {/* Pagination */}
            {(photos?.length > ITEMS_PER_PAGE) && (!loading) && (
                <Pagination contentItems={photos} current={page} />
            )}
          </div>
        </div>
      </div>
    )
}
