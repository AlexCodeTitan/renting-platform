export type User = {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  accountType: "tenant" | "landlord";
  email: string;
  token: string;
};

export type RegisterData = {
  name: string;
  surname: string;
  phoneNumber: string;
  accountType: "tenant" | "landlord";
  email: string;
  password: string;
};

export interface RegisterFormData extends RegisterData {
  confirmPassword: string;
}

export type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
};

export type AuthError = {
  message: string;
};

export type BasicUserInfo = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  accountType: "tenant" | "landlord";
};

export type RentalHistory = {
  pastAddress: string;
  duration: string; // Consider using a more specific type or format
  landlordContact: {
    phoneNumber: string;
    name: string;
    email: string;
  };
};

export type PetInfo = {
  hasPets: boolean;
  type?: string;
  number?: number;
};

export type TenantDetails = {
  workplace: string;
  salary: number; // Consider formatting or specific type
  description: string;
  rentalHistory: RentalHistory[];
  petInfo?: PetInfo;
  vehicleParking: {
    hasParking: boolean;
    number?: number;
  };
};

export type TenantState = BasicUserInfo & {
  tenantDetails?: TenantDetails;
};
