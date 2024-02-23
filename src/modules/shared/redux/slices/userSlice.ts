import { createSlice } from "@reduxjs/toolkit"

interface UserState {
  admin: boolean
  isLoggedIn: boolean
  pageSize: number
  id: string
  name: string
}

const initialState: UserState = {
  admin: false,
  isLoggedIn: true,
  pageSize: 8,
  id: "2",
  name: "Pepito",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

export const {} = userSlice.actions

export default userSlice.reducer
