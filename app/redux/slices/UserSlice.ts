import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiUser } from '../../../ApiTypes'

interface UserState {
  value: ApiUser | null
}

const initialState = { value: null } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser (state, action: PayloadAction<ApiUser>) {
      state.value = action.payload
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
