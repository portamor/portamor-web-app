import { Review } from "@src/models";
import { api } from "@src/redux/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReviewsByCourseId: build.query<Review[], { courseId: string }>({
      query: ({ courseId }) => ({
        url: `/review/${courseId}`,
        method: "get",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetReviewsByCourseIdQuery } = extendedApi;
