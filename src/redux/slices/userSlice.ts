import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  admin: boolean;
  id: string;
}

const initialState: UserState = {
  admin: false,
  id: "2"
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const {} = userSlice.actions;

export default userSlice.reducer;
