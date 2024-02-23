import { Review } from "@src/modules/shared/models"
import { api } from "@src/modules/shared/redux/api"

const extendedApi = api.injectEndpoints({
  endpoints: build => ({
    getReviewsByCourseId: build.query<Review[], { courseId: string }>({
      query: ({ courseId }) => ({
        url: `/review/${courseId}`,
        method: "get",
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetReviewsByCourseIdQuery } = extendedApi
