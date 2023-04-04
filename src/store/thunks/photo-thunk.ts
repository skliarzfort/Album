import { Dispatch } from "redux"
import axios from 'axios'
import { PhotosAction, PhotosActionTypes, PhotosParams } from "../../types/photos"

export const fetchPhotos = (params: PhotosParams) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: params
            })
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data})
        } catch(e) {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: 'Server error'})
        }
    }
}

export function setPhotosPage(page: number): PhotosAction {
    return {
        type: PhotosActionTypes.SET_PHOTOS_PAGE,
        payload: page
    }
}

export function setPhotosParams(params: PhotosParams): PhotosAction {
    return {
        type: PhotosActionTypes.SET_PHOTOS_PARAMS,
        payload: params
    }
}
