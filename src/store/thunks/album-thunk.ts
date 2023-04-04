import { Dispatch } from "redux"
import { AlbumAction, AlbumsActionTypes } from "../../types/album"
import axios from 'axios'

export const fetchAlbum = () => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS, payload: response.data})
        } catch(e) {
            dispatch({type: AlbumsActionTypes.FETCH_ALBUMS_ERROR, payload: 'Server error'})
        }
    }
}
