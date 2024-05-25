import { createSlice } from '@reduxjs/toolkit'

const UbicacionInventarioSlice = createSlice({
    name: 'ubicacionInventario',
    initialState: {
      infoUbicacion: []
    },
    reducers: {
      setCodigoPlano: (state, {payload}) => {
        state.infoUbicacion = payload
      }
    },
})

export const { setCodigoPlano } = UbicacionInventarioSlice.actions
export default UbicacionInventarioSlice.reducer