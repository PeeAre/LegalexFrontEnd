import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactApi } from './web/contact.api'

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
