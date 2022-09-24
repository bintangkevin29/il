import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultValue: UserDataDefaultValues = {
  userData: [],
  sortBy: undefined,
  direction: undefined,
};

const sortUserData = (
  userData: UserData[],
  sortBy: UserDataDefaultValues["sortBy"],
  sortDirection: UserDataDefaultValues["direction"]
) => {
  if (!sortBy || !sortDirection) return userData;
  return userData.sort((a, b) => {
    if (sortDirection === "asc") {
      if (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) return -1;
      if (a[sortBy].toUpperCase() > b[sortBy].toUpperCase()) return 1;
    } else {
      if (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) return 1;
      if (a[sortBy].toUpperCase() > b[sortBy].toUpperCase()) return -1;
    }
    return 0;
  });
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    value: defaultValue,
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
      state.value.userData = sortUserData(
        newState,
        state.value.sortBy,
        state.value.direction
      );
    },
    setAllUser: (state, action: PayloadAction<UserData[]>) => {
      state.value.userData =
        state.value.userData =
        state.value.userData =
          sortUserData(
            action.payload,
            state.value.sortBy,
            state.value.direction
          );
    },
    deleteUser: (state, action: PayloadAction<UserData["id"]>) => {
      const newUserData = state.value.userData.filter(
        (dt) => dt.id !== action.payload
      );
      state.value.userData =
        state.value.userData =
        state.value.userData =
          sortUserData(newUserData, state.value.sortBy, state.value.direction);
    },
    setSort: (
      state,
      action: PayloadAction<{
        sortBy: UserDataDefaultValues["sortBy"];
        direction: UserDataDefaultValues["direction"];
      }>
    ) => {
      const newUserData = sortUserData(
        state.value.userData,
        action.payload.sortBy,
        action.payload.direction
      );

      state.value = {
        ...state.value,
        userData: newUserData,
        sortBy: action.payload.sortBy,
        direction: action.payload.direction,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setAllUser, updateUser, setSort } =
  userDataSlice.actions;

export default userDataSlice.reducer;
