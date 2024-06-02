import { createSlice } from '@reduxjs/toolkit'

const FilesSlice = createSlice({
    name: 'Pais',
    initialState: {
      files: [
        // {
        //   "fieldname": "oleo",
        //   "originalname": "OleoEileen.png",
        //   "encoding": "7bit",
        //   "mimetype": "image/png",
        //   "destination": "./uploads",
        //   "filename": "oleo-1717350837083-160538406",
        //   "path": "uploads/silla-1717357432456-778358694",
        //   "size": 397519
        // },
        {
          "fieldname": "mesa-pino",
          "originalname": "Mesa_Pino_M203_P_e8a9c54d-7fe4-47a9-83f1-d54daf69a5f6_700x700.webp",
          "encoding": "7bit",
          "mimetype": "image/webp",
          "destination": "./uploads",
          "filename": "mesa-pino-1717357982856-653034734",
          "path": "uploads/mesa-pino-1717357982856-653034734",
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