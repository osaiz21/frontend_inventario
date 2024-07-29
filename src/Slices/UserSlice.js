import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'users',
    initialState: {
      info: {},
      tipo_identificacion:[]
    },
    reducers: {
      setPerfil: (state, { payload }) => {
        state.info = payload
      },
      setIdentificacion: (state, action) => {
        state.tipo_identificacion = action
      }
    },
})

export const { setPerfil , setIdentificacion } = UserSlice.actions
export default UserSlice.reducer