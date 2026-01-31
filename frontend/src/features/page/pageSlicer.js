import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  
  },
})

export const { setPage} = pageSlice.actions

export default pageSlice.reducer