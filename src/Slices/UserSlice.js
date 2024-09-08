import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'users',
    initialState: {
      info: {},
      tipo_identificacion:[],
      empleados_empresa: []

    },
    reducers: {
      setPerfil: (state, { payload }) => {
        state.info = payload
      },
      setIdentificacion: (state, action) => {
        state.tipo_identificacion = action
      },
      setEmpleados: (state, {payload}) => {
        state.empleados_empresa = payload
      }
    },
})

export const { setPerfil , setIdentificacion, setEmpleados } = UserSlice.actions
export default UserSlice.reducer