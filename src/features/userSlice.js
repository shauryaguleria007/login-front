import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  name: null,
}

export const usertSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
    resetUser: (state) => {
      state.email = null
      state.name = null
    },
  },
})
export default usertSlice.reducer
export const { setUser, resetUser } = usertSlice.actions
