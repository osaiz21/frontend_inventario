import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'users',
    initialState: {
      info: {
        nombres: 'Jabali',
        apellidos: 'Jabali 2',
        email: 'jabali@gmail.com',
        foto: 'ttt'
      }
    },
    reducers: {
      getPerfil: (state, action) => {
        state.info = action
      }
    },
})

export const { getPerfil } = UserSlice.actions
export default UserSlice.reducer