import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/modules/shared/const/request";
import { SectionState } from "../interfaces";
import { RootState } from "../store";
import { FindGetCourseSections } from "@src/modules/courses/types/dtos";

const initialState: SectionState = {
  status: RequestType.Idle,
  error: null,
  data: null,
};

/* export const fetchGetCourseSections = createAsyncThunk<
  FindGetCourseSections,
  { id: string },
  { state: RootState }
>(
  "home/fetchGetCourseSections",
  async ({ id }) => await getSectionsByCourseId(id)
); */

export const courseSectionsSlice = createSlice({
  name: "courseSections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* builder.addCase(fetchGetCourseSections.pending, (state: SectionState) => {
      state.status = RequestType.Pending;
    });
    builder.addCase(
      fetchGetCourseSections.fulfilled,
      (state: SectionState, action: PayloadAction<FindGetCourseSections>) => {
        state.status = RequestType.Resolved;
        state.data = action.payload.data;
      }
    );
    builder.addCase(
      fetchGetCourseSections.rejected,
      (state: SectionState, action) => {
        state.status = RequestType.Rejected;
        state.error = action.error.message || "Unknown error";
      }
    ); */
  },
});

export const {} = courseSectionsSlice.actions;

export default courseSectionsSlice.reducer;
