import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import {
  courseDetailSlice,
  courseSectionsSlice,
  courseUsersSlice,
  coursesSlice,
  courseInstructorSlice,
  userSlice,
} from "./slices";

const rootReducer = combineReducers({
  courses: coursesSlice,
  user: userSlice,
  courseDetail: courseDetailSlice,
  courseSections: courseSectionsSlice,
  courseUsers: courseUsersSlice,
  courseInstructor: courseInstructorSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
