import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { CourseState } from "../interfaces";
import { getCourseDetail } from "../../services/courses.service";
import { RootState } from "../store";
import { FindCourse } from "@src/services/dtos";

const initialState: CourseState = {
  status: RequestType.Idle,
  error: null,
  data: null,
};

export const fetchGetCourseDetail = createAsyncThunk<
  FindCourse,
  { id: string },
  { state: RootState }
>("home/fetchGetCourseDetail", async ({ id }) => await getCourseDetail(id));

export const courseDetailSlice = createSlice({
  name: "courseDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCourseDetail.pending, (state: CourseState) => {
      state.status = RequestType.Pending;
    });
    builder.addCase(
      fetchGetCourseDetail.fulfilled,
      (state: CourseState, action: PayloadAction<FindCourse>) => {
        state.status = RequestType.Resolved;
        state.data = action.payload.data;
      }
    );
    builder.addCase(fetchGetCourseDetail.rejected, (state: CourseState, action) => {
      state.status = RequestType.Rejected;
      state.error = action.error.message || "Unknown error";
    });
  },
});

export const {} = courseDetailSlice.actions;

export default courseDetailSlice.reducer;
