import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { RootState } from "../store";
import { InstructorState } from "../interfaces";
import { FindInstructorId } from "@src/services/dtos";
import { getInstructorById } from "@src/services/instructor.service";

const initialState: InstructorState = {
  status: RequestType.Idle,
  error: null,
  data: null,
};

export const fetchGetCourseInstructor = createAsyncThunk<
  FindInstructorId,
  { id: string },
  { state: RootState }
>("home/fetchGetCourseInstructor", async ({ id }) => await getInstructorById(id));

export const courseInstructorSlice = createSlice({
  name: "courseInstructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCourseInstructor.pending, (state: InstructorState) => {
      state.status = RequestType.Pending;
    });
    builder.addCase(
      fetchGetCourseInstructor.fulfilled,
      (state: InstructorState, action: PayloadAction<FindInstructorId>) => {
        state.status = RequestType.Resolved;
        state.data = action.payload.data;
      }
    );
    builder.addCase(
      fetchGetCourseInstructor.rejected,
      (state: InstructorState, action) => {
        state.status = RequestType.Rejected;
        state.error = action.error.message || "Unknown error";
      }
    );
  },
});

export const {} = courseInstructorSlice.actions;

export default courseInstructorSlice.reducer;
