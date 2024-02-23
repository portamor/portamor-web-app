import { api } from "@src/modules/shared/redux/api"

const extendedApi = api.injectEndpoints({
  endpoints: build => ({
    inscribeUser: build.mutation<{}, { userId: string; courseId: string }>({
      query: ({ userId, courseId }) => ({
        url: `/users/inscription/${userId}/${courseId}`,
        method: "post",
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useInscribeUserMutation } = extendedApi
