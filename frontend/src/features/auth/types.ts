export interface User {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  accountType: "tenant" | "landlord";
  email: string;
  token: string;
}

export interface RegisterData {
  name: string;
  surname: string;
  phoneNumber: string;
  accountType: "tenant" | "landlord";
  email: string;
  password: string;
}

export interface RegisterFormData extends RegisterData {
  confirmPassword: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

export interface AuthError {
  message: string;
}
