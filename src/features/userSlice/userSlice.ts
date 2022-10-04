import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypes } from "../../../interface.model";

const initialState: UserTypes = {
  email: "",
  name: "",
  password: "",
  phone: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { setEmail, setName, setPassword, setPhone } = userSlice.actions;

export default userSlice.reducer;
