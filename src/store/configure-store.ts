import { store } from ".";

export type StoreState = ReturnType<typeof store.getState>;
export type PhotoDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch;
