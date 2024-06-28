import { createSlice } from '@reduxjs/toolkit'

const FilesSlice = createSlice({
    name: 'view_files',
    initialState: {
      files: []
    },
    reducers: {
      setFiles: (state, {payload}) => {
        state.files = payload
      },
      removeKeyFiles: (state, {payload}) => {
        console.log(payload)
        let newFiles = state.files.filter((value, index) => { 
          return index != payload
        })
        state.files = newFiles
      }
    },
})

export const { 
  setFiles, 
  removeKeyFiles
} = FilesSlice.actions
export default FilesSlice.reducer