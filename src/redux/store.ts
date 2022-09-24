import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/user-data.slice";
import tableReducer from "./slices/table.slice";

export const store = configureStore({
  reducer: { userData: userDataReducer, table: tableReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
