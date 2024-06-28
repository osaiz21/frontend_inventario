import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../Slices/UserSlice'
import UbicacionInventarioSlice from '../Slices/UbicacionInventarioSlice'
import PaisSlice from '../Slices/PaisSlice'
import InventarioSlice from '../Slices/InventarioSlice'
import FilesSlice from '../Slices/FilesSlice'

export const store = configureStore({
  reducer: {
    users: UserSlice,
    ubicacionInventario: UbicacionInventarioSlice,
    paises: PaisSlice,
    inventario: InventarioSlice,
    view_files: FilesSlice
  },
})