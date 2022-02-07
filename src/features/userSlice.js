import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayName: null,
    email: null,
    photo: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      signInUser: (state, action) => {
          state.displayName = action.payload.displayName;
          state.email = action.payload.email;
          state.photo = action.payload.photo;
      },
      logOutUser: (state) => {
          state.displayName = null;
          state.email = null;
          state.photo = null;
      }
  },
});

export const { signInUser, logOutUser } = userSlice.actions;

export const selectName = state => state.user.displayName;
export const selectEmail = state => state.user.email;
export const selectPhoto = state => state.user.photo;

export default userSlice.reducer;
