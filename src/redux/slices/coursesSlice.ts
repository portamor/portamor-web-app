import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { CoursesState } from "../interfaces";
import { Courses } from "@src/models";
import { getCourses, getCoursesByGenre } from "../../services/courses.service";
import { RootState } from "../store";
import { FindCourses } from "@src/services/dtos";

const initialState: CoursesState = {
  status: RequestType.Idle,
  error: null,
  data: null,
  pageSize: 8,
};

export const fetchGetCourses = createAsyncThunk<
  FindCourses,
  { page: number },
  { state: RootState }
>("home/fetchGetCourses", async ({ page }, thunkApi) => {
  const { courses } = thunkApi.getState();
  return await getCourses(page, courses.pageSize);
});

export const fetchGetCoursesByGenre = createAsyncThunk<
  FindCourses,
  { id: string },
  { state: RootState }
>("home/fetchGetCoursesByGenre", async ({ id }) => await getCoursesByGenre(id));

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    /* updateCampaign: (
      state: HomeState,
      action: PayloadAction<{ monthlyAmount: number; currentQuota: number }>
    ) => {
      const { monthlyAmount, currentQuota } = action.payload;
      state.monthlyAmount = monthlyAmount;
      state.currentQuota = currentQuota;
    }, */
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetCourses.pending, (state: CoursesState) => {
      state.status = RequestType.Pending;
    });
    builder.addCase(
      fetchGetCourses.fulfilled,
      (state: CoursesState, action: PayloadAction<FindCourses>) => {
        state.status = RequestType.Resolved;
        state.data = action.payload.data;
      }
    );
    builder.addCase(fetchGetCourses.rejected, (state: CoursesState, action) => {
      state.status = RequestType.Rejected;
      state.error = action.error.message || "Unknown error";
    });
    builder.addCase(fetchGetCoursesByGenre.pending, (state: CoursesState) => {
      state.status = RequestType.Pending;
    });
    builder.addCase(
      fetchGetCoursesByGenre.fulfilled,
      (state: CoursesState, action: PayloadAction<FindCourses>) => {
        state.status = RequestType.Resolved;
        state.data = action.payload.data;
      }
    );
    builder.addCase(fetchGetCoursesByGenre.rejected, (state: CoursesState, action) => {
      state.status = RequestType.Rejected;
      state.error = action.error.message || "Unknown error";
    });
  },
});

export const {} = coursesSlice.actions;

export default coursesSlice.reducer;
