import { createSlice } from '@reduxjs/toolkit'

const UbicacionInventarioSlice = createSlice({
    name: 'ubicacionInventario',
    initialState: {
      infoUbicacion: [],
      codigoPlanoSelected: {}
    },
    reducers: {
      setCodigoPlano: (state, {payload}) => {
        state.infoUbicacion = payload
      },
      setCodigoPlanoSelected: (state, {payload}) => {
        state.codigoPlanoSelected = payload
      }
    },
})

export const { 
  setCodigoPlano,
  setCodigoPlanoSelected
} = UbicacionInventarioSlice.actions
export default UbicacionInventarioSlice.reducer