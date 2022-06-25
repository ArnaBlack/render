import { configureStore } from '@reduxjs/toolkit'

import { configReducer, presentationParamsReducer } from './reducer'

export const store = configureStore({
  reducer: {
    config: configReducer,
    presentationParams: presentationParamsReducer,
  },
})
