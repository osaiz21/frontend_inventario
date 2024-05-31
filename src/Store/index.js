import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../Slices/UserSlice'
import UbicacionInventarioSlice from '../Slices/UbicacionInventarioSlice'
import PaisSlice from '../Slices/PaisSlice'
import InventarioSlice from '../Slices/InventarioSlice'

export const store = configureStore({
  reducer: {
    users: UserSlice,
    ubicacionInventario: UbicacionInventarioSlice,
    paises: PaisSlice,
    inventario: InventarioSlice
  },
})