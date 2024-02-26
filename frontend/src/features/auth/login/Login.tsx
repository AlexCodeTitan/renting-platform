import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { login } from "../authSlice";
import { Link } from "react-router-dom";
import {
  AuthWrapper,
  ButtonWrapper,
  FormContainer,
  InputWrapper,
} from "../AuthPage.style";
import Button from "../../../components/button/Button";
import InputGroup from "../../../components/input/Input";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(login({ email, password }))
    //   .unwrap()
    //   .then((user) => {
    //     console.log("Login successful:", user);
    //     // Navigate to another route or update the UI accordingly
    //   })
    //   .catch((error) => {
    //     console.error("Login failed:", error);
    //     // Update the UI to show an error message
    //   });
    console.log({ email, password });
  };

  return (
    <AuthWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <InputWrapper>
          <InputGroup
            htmlFor="email"
            labelText="Email"
            type="email"
            id="email"
            inputName="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
          <InputGroup
            htmlFor="password"
            labelText="Password"
            type="password"
            id="password"
            inputName="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
        </InputWrapper>
        <ButtonWrapper>
          <Link to={"/register"}>
            <Button>&lt; SignUp</Button>
          </Link>
          <Button type="submit">LogIn</Button>
        </ButtonWrapper>
      </FormContainer>
    </AuthWrapper>
  );
};

export default Login;
