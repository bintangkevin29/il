import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultValue: UserInterfaceData = {
  show: false,
  updateData: undefined,
  page: 1,
};

export const userInterfaceSlice = createSlice({
  name: "userInterface",
  initialState: {
    value: defaultValue,
  },
  reducers: {
    showAdd: (state) => {
      state.value = { ...state.value, show: true, updateData: undefined };
    },
    showUpdate: (state, action: PayloadAction<UserData>) => {
      state.value = { ...state.value, show: true, updateData: action.payload };
    },
    hide: (state) => {
      state.value = { ...defaultValue, page: state.value.page };
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.value = { ...state.value, page: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAdd, showUpdate, hide, setPage } =
  userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
