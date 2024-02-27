import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthInterface {
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: AuthInterface = {
  token: "",
  isLoggedIn: false,
  isLoading: false,
};

export const fetchUserLogin: any = createAsyncThunk(
  "users/doLogin",
  async (val: { password: string; email: string }) => {
    const response = await fetch(`https://reqres.in/api/login`, {
      method: "post",
      body: JSON.stringify({email: val.email||"eve.holt@reqres.in", password: val.password|| 'cityslicka'}),
      headers: {
        "content-type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  }
);

export const authenticatedUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<any>) => {
    //   console.log('pyload', action, "state",state)
    //   return {...state, isLoggedIn: action.payload.isLoggedIn, token: action.payload.token };
    // },
    logout: (state) => {
      return {...state, isLoggedIn: false, token: '' };
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchUserLogin.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUserLogin.fulfilled,
      (state: any, action: { payload: any }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      }
    );
    builder.addCase(
      fetchUserLogin.rejected,
      (state: any, action: { payload: object }) => {
        state.isLoading = false;
        // state.error = action.error.message
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authenticatedUserSlice.actions;

export default authenticatedUserSlice.reducer;
