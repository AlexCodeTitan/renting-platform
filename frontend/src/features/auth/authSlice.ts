import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { User, AuthState, AuthError, RegisterData } from "./authTypes";

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

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await authService.login(loginData);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error: any) {
      let message = "Something went wrong";
      if (error.response && error.response.data.message) {
        message = error.response.data.message;
      }
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

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
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload
          ? (action.payload as AuthError).message
          : "Login failed";
        state.user = null;
        state.token = null;
      });
  },
});

export const { reset } = authSlice.actions;
export const SelectUser = (state: { user: AuthState }) => state.user.user;
export default authSlice.reducer;
