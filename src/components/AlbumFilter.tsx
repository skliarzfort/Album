import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { store } from '../store';
import { fetchAlbum } from '../store/thunks/album-thunk';
import { Spinner } from './Spinner';
import Select, { MultiValue } from 'react-select';
import { AlbumItem } from '../types/album';
import { setPhotosParams } from '../store/thunks/photo-thunk';
import { PhotosParams } from '../types/photos';

type StoreState = ReturnType<typeof store.getState>;
const getAlbumsState = (state: StoreState) => state.albums;

type Option = {
    value: number
    label: string
};

export interface AlbumFilterProps {
    photosParams: PhotosParams
}

export const AlbumFilter: FunctionComponent<AlbumFilterProps> = ({photosParams}) => {
    const {loading, albums} = useTypedSelector(getAlbumsState);
    const dispatch = useDispatch<any>(); //todo: check type
    const [options, setOptions] = useState<Array<Option>>([]);

    useEffect(() => {
        dispatch(fetchAlbum())
    }, []);

    useEffect(() => {
        if (albums?.length) {
            const filterOptions = albums.map((item: AlbumItem) => {
                return {
                    value: item?.id,
                    label: `(${item?.id}) ${item?.title}`
                }
            });
            setOptions(filterOptions);
        }
    }, [albums]);

    const handleSelect = (selectedOptions: MultiValue<Option>) => {
        if (selectedOptions.length) {
            const updatedParams = Object.assign({}, photosParams);
            updatedParams.albumId = selectedOptions.map(item => item?.value);
            dispatch(setPhotosParams(updatedParams));
        } else {
            const updatedParams = Object.assign({}, photosParams);
            delete updatedParams.albumId;
            dispatch(setPhotosParams(updatedParams));
        }
    };

    return (
        <div>
            {loading ? (
                <div className='p-3'>
                    <Spinner color='text-primary' />
                </div>
            ) : (
                <div className='album__filter'>
                    <Select
                        options={options}
                        isMulti
                        onChange={handleSelect}
                        placeholder='Filter by Album'
                        className="album__filter-select" />
                </div>
            )}
        </div>
    )
}
