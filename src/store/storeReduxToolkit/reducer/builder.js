import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import set from 'lodash.set'
import { componentsConfig } from '../../../config'

const initialState = {
  data: componentsConfig,
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setProps: (state, { payload }) => {
      const { path, value } = payload
      set(state.data, path, value);
    },
  },
})

const selectComponent = (state) => (id) =>  {
  const { config } = state
  return config && config.data ? config.data[id] : {}
}

export const configActions = configSlice.actions

export const configReducer = configSlice.reducer

export const configSelectors = {
  selectComponent
}
