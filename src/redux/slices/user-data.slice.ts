import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: {
      userData: [] as UserData[],
      sortBy: "nama" as keyof UserData,
      direction: "asc" as "asc" | "desc",
    },
  },
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      const tempState = state.value.userData;
      tempState.push(action.payload);
      state.value.userData = [...tempState];
    },
    updateUser: (
      state,
      action: PayloadAction<{ id: string; userData: UserData }>
    ) => {
      const newState = state.value.userData.map((dt) =>
        dt.id === action.payload.id ? action.payload.userData : dt
      );
      state.value.userData = newState;
    },
    setAllUser: (state, action: PayloadAction<UserData[]>) => {
      state.value.userData = action.payload;
    },
    deleteUser: (state, action: PayloadAction<UserData["id"]>) => {
      state.value.userData = state.value.userData.filter(
        (dt) => dt.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setAllUser, updateUser } =
  userDataSlice.actions;

export default userDataSlice.reducer;
