import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypes } from "../../../interface.model";

const initialState: UserTypes = {
  email: "",
  name: "",
  password: "",
  phone: "",
  width: 1440,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    setPhone: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        phone: action.payload,
      };
    },
    setReset: (state) => {
      return {
        ...state,
        email: "",
        name: "",
        password: "",
        phone: "",
      };
    },
    setWidth: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        width: action.payload,
      };
    },
  },
});

export const { setEmail, setName, setPassword, setPhone, setReset, setWidth } =
  userSlice.actions;

export default userSlice.reducer;
