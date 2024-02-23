import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosBaseQuery } from "@src/modules/shared/redux/axiosConfig"

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: () => ({}),
})
