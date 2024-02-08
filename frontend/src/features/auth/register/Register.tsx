import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { reset } from "../authSlice";
import { RegisterFormData } from "../types";
import { AuthWrapper } from "./Register.styles";

const initialState: RegisterFormData = {
  name: "",
  surname: "",
  phoneNumber: "",
  accountType: "tenant", // default value
  email: "",
  password: "",
  confirmPassword: "",
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (isSuccess) {
      console.log("Registration Successful");
    }

    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, message, dispatch]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match."); // Replace with a more user-friendly error handling approach
      return;
    }

    // const { confirmPassword, ...registrationData } = formData;
    // dispatch(register(registrationData));
    console.log(formData);
  };

  return (
    <AuthWrapper>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={onChange}
          placeholder="Surname"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          placeholder="Phone Number"
          required
        />
        <select
          name="accountType"
          value={formData.accountType}
          onChange={onChange}
          required
        >
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
        </select>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit" disabled={isLoading}>
          Register
        </button>
      </form>
    </AuthWrapper>
  );
};

export default Register;
