import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: [] as UserData[],
  },
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      const tempState = state.value;
      tempState.push(action.payload);
      state.value = [...tempState];
    },
    updateUser: (
      state,
      action: PayloadAction<{ id: string; userData: UserData }>
    ) => {
      const newState = state.value.map((dt) =>
        dt.id === action.payload.id ? action.payload.userData : dt
      );
      state.value = newState;
    },
    setAllUser: (state, action: PayloadAction<UserData[]>) => {
      state.value = action.payload;
    },
    deleteUser: (state, action: PayloadAction<UserData["id"]>) => {
      state.value = state.value.filter((dt) => dt.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setAllUser, updateUser } =
  userDataSlice.actions;

export default userDataSlice.reducer;
