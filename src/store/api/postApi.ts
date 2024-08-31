import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IGetAllPostResponse,
  IGetPostResponse,
  ICreatePostResponse,
  ICreatePostPayload,
  IUpdatePostResponse,
  IUpdatePostPayload,
  IDeletePostResponse,
} from "./types";
import { baseUrl } from "../../utils/constants";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }), 
  endpoints: (builder) => ({
    getPostById: builder.query<IGetPostResponse, string>({
      query: (post_id) => `/post?post_id=${post_id}`,
    }),
    getAllPosts: builder.query<IGetAllPostResponse, null>({
      query: () => `/post`,
    }),
    createPost: builder.mutation<ICreatePostResponse, ICreatePostPayload>({
      query: (post_data) => ({
        url: "/post",
        method: "POST",
        body: post_data,
      }),
    }),
    updatePost: builder.mutation<IUpdatePostResponse, IUpdatePostPayload>({
      query: (updated_data) => ({
        url: "/post",
        method: "PUT",
        body: updated_data,
      }),
    }),
    deletePost: builder.mutation<IDeletePostResponse, string>({
      query: (post_id) => ({
        url: `/post?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLazyGetAllPostsQuery,
  useLazyGetPostByIdQuery
} = postApi;
