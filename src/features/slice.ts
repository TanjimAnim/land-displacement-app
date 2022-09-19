import { createSlice } from "@reduxjs/toolkit";
import { NotificationData } from "../app/notificationData";

export interface AreaState {
  value: any;
  selectedLink: string;
  notification: object[];
}

const initialState: AreaState = {
  value: [],
  selectedLink: "",
  notification: NotificationData,
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
    removeNotification: (state, action) => {
      state.notification = state.notification.filter((item: any) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addArea, setSelectedLink, removeNotification } =
  areaSlice.actions;
export default areaSlice.reducer;
