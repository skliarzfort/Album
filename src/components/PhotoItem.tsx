import React, { FunctionComponent } from 'react'
import { Photo } from '../types/photos'

export interface PhotoItemProps {
    photo: Photo
}

export const PhotoItem: FunctionComponent<PhotoItemProps> = ({photo}) => {
    return (
        <div className='thumbnail'>
            <div className='thumbnail__img'>
                <img src={photo.url} alt={photo.thumbnailUrl} />
                <div className='thumbnail__note'>
                    id: {photo.id}<br />
                    albumId: {photo.albumId}
                </div>
            </div>
            <div className='thumbnail__description'>{photo.title}</div>
        </div>
    )
}
