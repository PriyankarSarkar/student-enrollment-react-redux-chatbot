import { createSlice } from "@reduxjs/toolkit";

const UserDataSlice = createSlice({
  name: "UserData",
  initialState: {
    name: "",
    age: 0,
    slot: "",
  },
  reducers: {
    addName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    addAge: (state, action) => {
      return {
        ...state,
        age: action.payload,
      };
    },
    addSlot: (state, action) => {
      return {
        ...state,
        slot: action.payload,
      };
    },
  },
});

export default UserDataSlice.reducer;
export const { addName, addAge, addSlot } = UserDataSlice.actions;
