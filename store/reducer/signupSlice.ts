import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface SignUpUser {
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: SignUpUser = {
  token: "",
  isLoggedIn: false,
  isLoading: false,
};

export const createUser: any = createAsyncThunk(
  "users/signup",
  async (val: { password: string; email: string }) => {
    const response = await fetch(`https://reqres.in/api/register`, {
      method: "post",
      body: JSON.stringify({ email: val.email, password: val.password }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

export const createUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // logout: (state) => {
    //   return { ...state, isLoggedIn: false, token: "" };
    // },
  },
  extraReducers: (builder: any) => {
    builder.addCase(createUser.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(
      createUser.fulfilled,
      (state: any, action: { payload: any }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      }
    );
    builder.addCase(
      createUser.rejected,
      (state: any) => {
        state.isLoading = false;
        // state.error = action.error.message
      }
    );
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = createUserSlice.actions;

export default createUserSlice.reducer;
