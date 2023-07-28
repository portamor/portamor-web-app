import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosBaseQuery } from "@src/services/axiosConfig";

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: () => ({}),
});
