export enum AlbumsActionTypes {
    FETCH_ALBUMS = 'FETCH_ALBUMS',
    FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
    FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',
}

interface FetchAlbums {
    type: AlbumsActionTypes.FETCH_ALBUMS
}

interface FetchAlbumsSuccess {
    type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS
    payload: Array<AlbumItem>
}

interface FetchAlbumsError {
    type: AlbumsActionTypes.FETCH_ALBUMS_ERROR
    payload: string
}

export interface AlbumItem {
    userId: number
    id: number
    title: string
}


export interface AlbumState {
    albums: Array<AlbumItem>
    loading: boolean
    error: string | null
}

export type AlbumAction = FetchAlbums | FetchAlbumsSuccess | FetchAlbumsError
