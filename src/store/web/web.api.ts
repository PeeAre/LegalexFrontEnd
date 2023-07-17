import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const HOST = 'legalex.by'
//process.env.REACT_APP_HOST
const TOKEN = ''

export const webApi = createApi({
  reducerPath: 'web/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.${HOST}/`,
    prepareHeaders: (headers) => {
      // headers.set('authorization', `Bearer ${TOKEN}`)
    },
  }),
  endpoints: (build) => ({
    getAgenda: build.query<any, string>({
      query: (locale) => ({
        url: `calendars?locale=${locale}`,
      }),
    }),
  }),
})

export const { useGetAgendaQuery } = webApi
