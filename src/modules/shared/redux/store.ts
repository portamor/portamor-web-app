import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit"
import { courseSectionsSlice, userSlice } from "./slices"
import { api } from "./api"

const rootReducer = combineReducers({
  user: userSlice,
  courseSections: courseSectionsSlice,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: gDM => gDM().concat(api.middleware),
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
