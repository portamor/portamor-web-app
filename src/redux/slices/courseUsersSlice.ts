import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { RootState } from "../store";
import { getUsersByCourseId } from "@src/services/users.service";
import { CourseUsersState } from "../interfaces";
import { FindUsersByCourseId } from "@src/services/dtos";

const initialState: CourseUsersState = {
  status: RequestType.Idle,
  error: null,
  data: null,
};

export const fetchGetCourseUsers = createAsyncThunk<
  FindUsersByCourseId,
  { id: string },
  { state: RootState }
>("home/fetchGetCourseUsers", async ({ id }) => await getUsersByCourseId(id));

export const courseUsersSlice = createSlice({
  name: "courseUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCourseUsers.pending, (state: CourseUsersState) => {
      state.status = RequestType.Pending;
    });
    builder.addCase(
      fetchGetCourseUsers.fulfilled,
      (state: CourseUsersState, action: PayloadAction<FindUsersByCourseId>) => {
        state.status = RequestType.Resolved;
        state.data = action.payload.data;
      }
    );
    builder.addCase(
      fetchGetCourseUsers.rejected,
      (state: CourseUsersState, action) => {
        state.status = RequestType.Rejected;
        state.error = action.error.message || "Unknown error";
      }
    );
  },
});

export const {} = courseUsersSlice.actions;

export default courseUsersSlice.reducer;
