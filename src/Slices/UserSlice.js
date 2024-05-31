import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'users',
    initialState: {
      info: {
        nombres: 'Jabali',
        apellidos: 'Jabali 2',
        email: 'jabali@gmail.com',
        foto: 'ttt'
      },
      tipo_identificacion:[]
    },
    reducers: {
      getPerfil: (state, action) => {
        state.info = action
      },
      setIdentificacion: (state, action) => {
        state.tipo_identificacion = action
      }
    },
})

export const { getPerfil , setIdentificacion } = UserSlice.actions
export default UserSlice.reducer