import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IContactUs } from '../../modules/contact'

const HOST = 'legalex.by'
//process.env.REACT_APP_HOST

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.${HOST}/`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json")
        return headers
    },
  }),

  endpoints: (builder) => ({
    sendFeedback: builder.mutation({
      query: (body: IContactUs) => {
        return {
          url: 'order',
          method: 'POST',
          body: JSON.stringify(body),
          mode: 'no-cors',
          referrerPolicy: 'no-referrer-when-downgrade',
        }
      },
    }),
  }),
})

export const { useSendFeedbackMutation } = contactApi
