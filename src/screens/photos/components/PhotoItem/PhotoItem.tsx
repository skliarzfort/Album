import React, { FunctionComponent } from 'react'
import { Photo } from '../../../../types/photos'
import styles from './PhotoItem.module.scss'; 

export interface PhotoItemProps {
    photo: Photo
}

export const PhotoItem: FunctionComponent<PhotoItemProps> = ({photo}) => {
    return (
        <div className={styles.thumbnail}>
            <div className={styles.thumbnail__img}>
                <img src={photo.url} alt={photo.thumbnailUrl} />
                <div className={styles.thumbnail__note}>
                    id: {photo.id}<br />
                    albumId: {photo.albumId}
                </div>
            </div>
            <div className={styles.thumbnail__description}>{photo.title}</div>
        </div>
    )
}
