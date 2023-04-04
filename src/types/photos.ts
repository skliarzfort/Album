export enum PhotosActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
    SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE',
    SET_PHOTOS_PARAMS = 'SET_PHOTOS_PARAMS'
}

interface FetchPhotos {
    type: PhotosActionTypes.FETCH_PHOTOS
}

interface FetchPhotosSuccess {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS
    payload: Array<Photo>
}

interface FetchPhotosError {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR
    payload: string
}

interface SetPhotosParams {
    type: PhotosActionTypes.SET_PHOTOS_PARAMS
    payload: object
}

interface SetPhotosPage {
    type: PhotosActionTypes.SET_PHOTOS_PAGE
    payload: number
}

export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export interface PhotosParams {
    albumId?: Array<number> | number
    title_like?: string
}

export interface Photostate {
    photos: Array<Photo>
    loading: boolean
    error: null | string
    page: number
    photosParams: PhotosParams
}

export type PhotosAction = FetchPhotos | FetchPhotosSuccess | FetchPhotosError | SetPhotosParams | SetPhotosPage
