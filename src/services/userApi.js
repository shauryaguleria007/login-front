import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://react-login-6gva.onrender.com/api/v1/`,
    withCredentials: true,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user/info',
      keepUnusedDataFor: 0.01,
    }),
    logout: builder.query({
      query: () => 'auth/logout',
      keepUnusedDataFor: 0.01,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'auth/login/email',
        method: 'POST',
        body,
      }),
      keepUnusedDataFor: 0.01,
    }),
    register: builder.mutation({
      query: (body) => ({
        url: 'user/register',
        method: 'POST',
        body,
      }),
      keepUnusedDataFor: 0.01,
    }),
  }),
})

export default userApi
export const {
  useGetUserQuery,
  useLoginMutation,
  useLogoutQuery,
  useRegisterMutation,
} = userApi
