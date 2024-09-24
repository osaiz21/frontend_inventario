import { createSlice } from '@reduxjs/toolkit'
import { axiosPrivate } from '../axios'
const axiosP = new axiosPrivate()


const UbicacionInventarioSlice = createSlice({
    name: 'ubicacionInventario',
    initialState: {
      infoUbicacion: axiosP.getItem('codigoPlanoSelected') || {},
      codigoPlanoSelected: axiosP.getItem('codigoPlanoSelected') || {},
      form_ubicacion_inventarios: {
        "codigo_plano": "" ,
        "sede": "",
        "departamento":"",
        "ubicacion_fisica":"",
        "piso": "1",
        "pais": "1",
        "ciudad": "1"
      }
      
    },
    reducers: {
      setCodigoPlano: (state, {payload}) => {
        state.infoUbicacion = payload
      },
      setCodigoPlanoSelected: (state, {payload}) => {
        state.codigoPlanoSelected = payload
      },
      setDataFormUbicacionInventario: (state, {payload}) => {
        state.form_ubicacion_inventarios = {
          ...state.form_ubicacion_inventarios,
          ...payload
        }
      }
    },
})

export const { 
  setCodigoPlano,
  setCodigoPlanoSelected,
  setDataFormUbicacionInventario
} = UbicacionInventarioSlice.actions
export default UbicacionInventarioSlice.reducer