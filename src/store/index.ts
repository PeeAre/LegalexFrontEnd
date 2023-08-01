import { configureStore } from '@reduxjs/toolkit'
import { contactApi } from './web/contact.api'
import { webApi } from './web/web.api'

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [webApi.reducerPath]: webApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware, webApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
