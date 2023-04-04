import {PhotosAction, PhotosActionTypes, Photostate} from '../../types/photos'

export const initialState: Photostate = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    photosParams: {}
}

export const photosReducer = (state = initialState, action: PhotosAction): Photostate => {
    switch (action.type) {
        case PhotosActionTypes.FETCH_PHOTOS:
            return {...state, loading: true}
        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload}
        case PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PhotosActionTypes.SET_PHOTOS_PAGE:
            return {...state, page: action.payload}
        case PhotosActionTypes.SET_PHOTOS_PARAMS:
            return {...state, photosParams: action.payload, page: 1}
        default: 
            return state
    }
}
