import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authenticatedUserSliceReducer from "./reducer/authReducer";
import createUserSlice from './reducer/signupSlice'
// import { thunk } from "redux-thunk";

// export const fetchUserLogin = createAsyncThunk(
//   "users/fetchById",
//   async (data: { password: string; email: string }) => {
//     const response = await fetch(`https://reqres.in/api/users`, {
//       method: "post",
//       body: JSON.stringify(data),
//     });
//     // Inferred return type: Promise<MyData>
//     return await response.json();
//   }
// );

export const store = configureStore({
  reducer: {
    authenticatedUserSliceReducer,
    createUserSlice
      // middleware:( getDefaultMiddleware:any ) =>
      // getDefaultMiddleware ? getDefaultMiddleware().concat(thunk) : thunk
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
