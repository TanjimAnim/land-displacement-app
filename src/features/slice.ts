import { createSlice } from "@reduxjs/toolkit";

export interface AreaState {
  value: any;
}

const initialState: AreaState = {
  value: [],
};

export const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    addArea: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addArea } = areaSlice.actions;
export default areaSlice.reducer;
