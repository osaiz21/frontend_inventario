import { createSlice } from '@reduxjs/toolkit'

const InventarioSlice = createSlice({
    name: 'users',
    initialState: {
      materiales:[],
      updActivofijo:{},
      endRegistry:{}
    },
    reducers: {
      setMateriales: (state, {payload}) => {
        state.initialState = payload
      },
      setActivoFijo: (state, { payload }) => {
        state.updActivofijo = payload
      },
      setEndRegistry: (state, { payload }) => {
        state.endRegistry = payload
      }
    },
})

export const { setMateriales, setActivoFijo , setEndRegistry } = InventarioSlice.actions
export default InventarioSlice.reducer