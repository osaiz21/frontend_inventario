import { createSlice } from '@reduxjs/toolkit'

const FilesSlice = createSlice({
    name: 'Pais',
    initialState: {
      files: [
        {
            "fieldname": "silla",
            "originalname": "silla.avif",
            "encoding": "7bit",
            "mimetype": "image/avif",
            "destination": "./uploads",
            "filename": "silla-1717523147983-581882952",
            "path": "uploads/silla-1717523147983-581882952",
            "size": 8028
        },
        {
          "fieldname": "mesa-pino",
          "originalname": "Mesa_Pino_M203_P_e8a9c54d-7fe4-47a9-83f1-d54daf69a5f6_700x700.webp",
          "encoding": "7bit",
          "mimetype": "image/webp",
          "destination": "./uploads",
          "filename": "mesa-pino-1717357982856-653034734",
          "path": "uploads/silla-1717521936767-739352844",
          "size": 8874
        }
      ],
      endpoint: import.meta.env.VITE_ENDPOINT
    },
    reducers: {
      setFiles: (state, {payload}) => {
        state.paises = payload
      }
    },
})

export const { setFiles } = FilesSlice.actions
export default FilesSlice.reducer