import React, { FunctionComponent, useEffect, useMemo } from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'; 
import { fetchAlbum } from '../../../../store/thunks/album-thunk';
import { Spinner } from '../../../../components/Spinner';
import Select, { MultiValue } from 'react-select';
import { AlbumItem } from '../../../../types/album';
import { setPhotosParams } from '../../../../store/thunks/photo-thunk';
import { albumsSelector } from '../../../../store/selectors/album';
import { useDispatch } from '../../../../hooks/dispatch';
import styles from './AlbumFilter.module.scss'; 
import { photosSelector } from '../../../../store/selectors/photos';

type Option = {
    value: number
    label: string
};

export const AlbumFilter: FunctionComponent = () => {
    const {photosParams} = useTypedSelector(photosSelector);
    const {loading, albums} = useTypedSelector(albumsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbum())
    }, []);

    const options = useMemo(() => {
        if (albums?.length) {
            return albums.map((item: AlbumItem) => {
                return {
                    value: item?.id,
                    label: `(${item?.id}) ${item?.title}`
                }
            });
        }

        return [];
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
                <Spinner color='text-primary' />
            ) : (
                <div className={styles.album__filter}>
                    <Select
                        options={options}
                        isMulti
                        onChange={handleSelect}
                        placeholder='Filter by Album'
                        className={styles['album__filter-select']} />
                </div>
            )}
        </div>
    )
}
