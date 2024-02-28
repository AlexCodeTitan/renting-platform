import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { reset } from "../authSlice";
import { RegisterFormData } from "../authTypes";
import authService from "../authService";

import {
  AuthWrapper,
  ButtonWrapper,
  FormContainer,
  // InputContainer,
  InputWrapper,
} from "../AuthPage.style";
import Button from "../../../components/button/Button";
import InputGroup from "../../../components/input/Input";
import CustomSelect from "../../../components/customSelect/CustomSelect";

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

  const onChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match."); // Replace with a more user-friendly error handling approach
      return;
    }

    const { confirmPassword, ...registrationData } = formData;
    // dispatch(authService.register(registrationData));
    console.log(formData, registrationData);
  };

  return (
    <AuthWrapper>
      <FormContainer onSubmit={onSubmit}>
        <InputWrapper>
          <InputGroup
            htmlFor="name"
            labelText="Name"
            type="text"
            id="name"
            inputName="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <InputGroup
            htmlFor="surname"
            labelText="Surname"
            type="text"
            id="surname"
            inputName="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
          <InputGroup
            htmlFor="phoneNumber"
            labelText="Phone"
            type="tel"
            id="phoneNumber"
            inputName="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <CustomSelect
            value={formData.accountType}
            onChange={(value: string) => onChange("accountType", value)}
            required
            options={[
              { value: "tenant", name: "Tenant" },
              { value: "landlord", name: "Landlord" },
            ]}
          />

          <InputGroup
            htmlFor="email"
            labelText="Email"
            type="email"
            id="email"
            inputName="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <InputGroup
            htmlFor="password"
            labelText="Password"
            type="password"
            id="password"
            inputName="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <InputGroup
            htmlFor="confirmPassword"
            labelText="Confirm Password"
            type="password"
            id="confirmPassword"
            inputName="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>
        <ButtonWrapper>
          <Link to={"/login"}>
            <Button secondary={true}>&lt; Login</Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            Register
          </Button>
        </ButtonWrapper>
      </FormContainer>
    </AuthWrapper>
  );
};

export default Register;
