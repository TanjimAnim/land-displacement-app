import { createSlice } from "@reduxjs/toolkit";

export interface AreaState {
  value: any;
  selectedLink: string;
}

const initialState: AreaState = {
  value: [],
  selectedLink: "",
};

export const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    addArea: (state, action) => {
      state.value = action.payload;
    },
    setSelectedLink: (state, action) => {
      state.selectedLink = action.payload;
    },
  },
});

export const { addArea, setSelectedLink } = areaSlice.actions;
export default areaSlice.reducer;
