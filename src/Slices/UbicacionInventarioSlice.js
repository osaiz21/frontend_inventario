import { createSlice } from '@reduxjs/toolkit'
import { axiosPrivate } from '../axios'
const axiosP = new axiosPrivate()


const UbicacionInventarioSlice = createSlice({
    name: 'ubicacionInventario',
    initialState: {
      infoUbicacion: axiosP.getItem('codigoPlanoSelected') || {},
      codigoPlanoSelected: axiosP.getItem('codigoPlanoSelected') || {}
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