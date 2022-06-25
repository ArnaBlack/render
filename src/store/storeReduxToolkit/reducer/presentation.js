import { createSlice } from '@reduxjs/toolkit'
import set from 'lodash.set'
import get from 'lodash.get'

const initialState = {
  customParams: {
    radioGroupValue: null
  }
}

const configSlice = createSlice({
  name: 'presentationParams',
  initialState,
  reducers: {
    setParam: (state, { payload }) => {
      const { path, value } = payload
      set(state, path, value);
    },
  },
})

const selectCustomParam = (path) => (state) =>  get(state.customParams, path)

export const presentationParamsActions = configSlice.actions

export const presentationParamsReducer = configSlice.reducer

export const presentationParamsSelectors = {
  selectCustomParam
}
