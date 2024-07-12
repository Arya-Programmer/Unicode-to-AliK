import { configureStore } from '@reduxjs/toolkit'
import conversionSlice from './slices/conversionSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        conversion: conversionSlice,
    }
  })
}