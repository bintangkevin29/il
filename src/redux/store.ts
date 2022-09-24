import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/user-data.slice";
import userInterfaceReducer from "./slices/user-interface.slice";

export const store = configureStore({
  reducer: { userData: userDataReducer, table: userInterfaceReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
