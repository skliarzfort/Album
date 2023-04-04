import {AlbumAction, AlbumsActionTypes, AlbumState} from './../../types/album'

export const initialState: AlbumState = {
    albums: [],
    loading: false,
    error: null
}

export const albumReducer = (state = initialState, action: AlbumAction): AlbumState => {
    switch (action.type) {
        case AlbumsActionTypes.FETCH_ALBUMS:
            return {...state, loading: true}
        case AlbumsActionTypes.FETCH_ALBUMS_SUCCESS:
            return {...state, loading: false, albums: action.payload}
        case AlbumsActionTypes.FETCH_ALBUMS_ERROR:
            return {...state, loading: false, error: action.payload}
        default: 
            return state
    }
}
