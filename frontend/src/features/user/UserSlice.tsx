import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicUserInfo, TenantDetails, TenantState } from "../auth/authTypes";

const initialState: TenantState = {
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  accountType: "tenant",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBasicUserInfo: (
      state: BasicUserInfo,
      action: PayloadAction<BasicUserInfo>
    ) => {
      return { ...state, ...action.payload };
    },
    setTenantDetails: (
      state: TenantState,
      action: PayloadAction<TenantDetails>
    ) => {
      state.tenantDetails = action.payload;
    },
  },
});

export const { setBasicUserInfo, setTenantDetails } = userSlice.actions;

export default userSlice.reducer;
