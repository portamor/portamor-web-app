import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  admin: boolean;
  pageSize: number;
  id: string;
}

const initialState: UserState = {
  admin: false,
  pageSize: 8,
  id: "2",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const {} = userSlice.actions;

export default userSlice.reducer;
