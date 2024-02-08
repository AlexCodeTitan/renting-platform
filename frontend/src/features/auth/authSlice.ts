import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { User, AuthState, AuthError, RegisterData } from "./types";

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk<
  User,
  RegisterData,
  { rejectValue: AuthError }
>("auth/register", async (userData, thunkAPI) => {
  try {
    return await authService.register(userData);
  } catch (error: any) {
    let message = "Something went wrong";
    if (error.response && error.response.data.message) {
      message = error.response.data.message;
    }
    // Optionally, structure the error response based on your API or preference
    return thunkAPI.rejectWithValue({ message });
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: AuthState) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload
          ? (action.payload as AuthError).message
          : "Failed to register";
        state.user = null;
      });
    // Implement login in a similar way
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
