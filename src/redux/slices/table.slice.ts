import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultValue: TableData = { show: false, updateData: undefined };

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    value: defaultValue,
  },
  reducers: {
    showAdd: (state) => {
      state.value = { show: true, updateData: undefined };
    },
    showUpdate: (state, action: PayloadAction<UserData>) => {
      state.value = { show: true, updateData: action.payload };
    },
    hide: (state) => {
      state.value = defaultValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAdd, showUpdate, hide } = tableSlice.actions;

export default tableSlice.reducer;
