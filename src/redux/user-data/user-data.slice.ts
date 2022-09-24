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
    setAllUser: (state, action: PayloadAction<UserData[]>) => {
      state.value = action.payload;
    },
    deleteUser: (state, action: PayloadAction<UserData["id"]>) => {
      state.value = state.value.filter((dt) => dt.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setAllUser } = userDataSlice.actions;

export default userDataSlice.reducer;
