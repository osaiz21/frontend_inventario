import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../Slices/UserSlice'
import UbicacionInventarioSlice from '../Slices/UbicacionInventarioSlice'

export const store = configureStore({
  reducer: {
    users: UserSlice,
    ubicacionInventario: UbicacionInventarioSlice
  },
})