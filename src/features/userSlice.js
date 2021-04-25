import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user : null,
  },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    login: (state, action) => {
     
      state.user = action.payload;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. For example: `useSelector((state: RootState) => state.counter.value)`.......... useSelector
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
