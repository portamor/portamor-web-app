import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  admin: boolean;
}

const initialState: UserState = {
  admin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const {} = userSlice.actions;

export default userSlice.reducer;
