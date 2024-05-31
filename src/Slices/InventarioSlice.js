import { createSlice } from '@reduxjs/toolkit'

const InventarioSlice = createSlice({
    name: 'users',
    initialState: {
      materiales:[]
    },
    reducers: {
      setMateriales: (state, {payload}) => {
        state.initialState = payload
      }
    },
})

export const { setMateriales } = InventarioSlice.actions
export default InventarioSlice.reducer