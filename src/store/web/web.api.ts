import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const STRAPI_TOKEN = process.env.REACT_APP_STRAPI_TOKEN
// const STRAPI_HOST = process.env.REACT_APP_STRAPI_HOST

export const webApi = createApi({
  reducerPath: 'strapi/api',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${STRAPI_HOST}/api/`, //https://site.xyz/api
    prepareHeaders: (headers) => {
      // headers.set('authorization', `Bearer ${STRAPI_TOKEN}`)
    },
  }),
  endpoints: (build) => ({
    getBanners: build.query<any, any>({
      // any - get, any - post
      query: () => ({
        url: `banners?populate=*`, //https://site.xyz/api/banners?populate=*
      }),
    }),
  }),
})

export const { useGetBannersQuery } = webApi
