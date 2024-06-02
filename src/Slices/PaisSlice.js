import { createSlice } from '@reduxjs/toolkit'

const PaisSlice = createSlice({
    name: 'Pais',
    initialState: {
      paises: [
        {
          "fieldname": "oleo",
          "originalname": "OleoEileen.png",
          "encoding": "7bit",
          "mimetype": "image/png",
          "destination": "./uploads",
          "filename": "oleo-1717350837083-160538406",
          "path": "uploads/oleo-1717350837083-160538406",
          "size": 397519
        }
      ]
    },
    reducers: {
      setPais: (state, {payload}) => {
        state.paises = payload
      }
    },
})

export const { setPais } = PaisSlice.actions
export default PaisSlice.reducer