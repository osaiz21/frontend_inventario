import { createSlice } from '@reduxjs/toolkit'

const PaisSlice = createSlice({
    name: 'Pais',
    initialState: {
      paises: []
    },
    reducers: {
      setPais: (state, {payload}) => {
        state.paises = payload
      }
    },
})

export const { setPais } = PaisSlice.actions
export default PaisSlice.reducer