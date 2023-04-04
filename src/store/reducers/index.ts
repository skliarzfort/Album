import { combineReducers } from "redux";
import { albumReducer } from "./album-reducer";
import { photosReducer } from "./photos-reducer";

export const rootReducer = combineReducers({
    albums: albumReducer,
    photos: photosReducer
})

export type RootState = ReturnType<typeof rootReducer>
