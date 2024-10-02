import { createSlice } from '@reduxjs/toolkit'

const InventarioSlice = createSlice({
    name: 'users',
    initialState: {
      materiales:[],
      updActivofijo:{}
    },
    reducers: {
      setMateriales: (state, {payload}) => {
        state.initialState = payload
      },
      setActivoFijo: (state, { payload }) => {
        state.updActivofijo = payload
      }
    },
})

export const { setMateriales, setActivoFijo } = InventarioSlice.actions
export default InventarioSlice.reducer