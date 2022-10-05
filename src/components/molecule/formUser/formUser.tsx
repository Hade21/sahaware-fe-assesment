import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  setEmail,
  setName,
  setPassword,
  setPhone,
  setReset,
} from "../../../features/userSlice/userSlice";
import {
  useSignInMutation,
  useSignUpMutation,
} from "../../../services/userApi/userApi";
import { Button, Input } from "../../atom";

interface FormUserProps {
  type: "signin" | "signup";
  close: (e: boolean) => void;
}
const FormUser = ({ type, close }: FormUserProps) => {
  const [formType, setFormType] = useState(type);
  const [cookies, setCookies] = useCookies(["token"]);
  const dispatch = useDispatch();
  const fullname = useSelector((state: RootState) => state.user.name);
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const phone = useSelector((state: RootState) => state.user.phone);
  const [
    signIn,
    {
      isLoading: isLoadingSignin,
      data: dataSignin,
      isSuccess: succesLogin,
      isError: errorLogin,
    },
  ] = useSignInMutation();
  const [
    signUp,
    {
      isLoading: isLoadingSignUp,
      data: dataSignUp,
      isSuccess: successSignUp,
      isError: errorSignUp,
    },
  ] = useSignUpMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === "fullname") {
      console.log(fullname, email);
      dispatch(setName(e.currentTarget.value));
    } else if (e.currentTarget.id === "email") {
      dispatch(setEmail(e.currentTarget.value));
    } else if (e.currentTarget.id === "password") {
      dispatch(setPassword(e.currentTarget.value));
    } else if (e.currentTarget.id === "phone") {
      dispatch(setPhone(e.currentTarget.value));
    }
  };
  const handleOver = () => {
    if (formType === "signup") {
      setFormType("signin");
    } else {
      setFormType("signup");
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === "signin") {
      await signIn({ email, password });
      if (succesLogin) {
        setCookies("token", dataSignin?.content[0].token);
        dispatch(setReset());
        close(false);
      }
    } else {
      await signUp({ name: fullname, email, password, phone });
      if (successSignUp) {
        setFormType("signin");
      }
    }
  };

  return (
    <div className="background flex h-screen w-screen items-center justify-center bg-modals-bg">
      <div className="wrapper rounded-lg bg-white p-20">
        {isLoadingSignUp || isLoadingSignin ? (
          <p className="text-center text-xl font-medium">Loading...</p>
        ) : (
          <div>
            <h1 className="title mb-2 text-4xl font-bold">
              {formType === "signup" ? "Create Account" : "Login"}
            </h1>
            <p className="subtitle text-base font-normal">
              {formType === "signup" ? "Have" : "Don't Have"} an account?{" "}
              <span className="cursor-pointer text-merah" onClick={handleOver}>
                {formType === "signup" ? "Login" : "Create Account"}
              </span>
            </p>
            {errorSignUp ? (
              <div className="error">
                {dataSignUp?.message?.details[0]?.message}
              </div>
            ) : null}
            {errorLogin ? (
              <div className="error">
                {dataSignin?.message?.details[0]?.message}
              </div>
            ) : null}
            <form className="mt-12 flex flex-col gap-6" onSubmit={handleSubmit}>
              {formType === "signup" ? (
                <div className="fullname">
                  <Input
                    id="fullname"
                    label="Fullname"
                    type="text"
                    placeholder="Entry your fullname"
                    onChange={handleChange}
                    value={fullname}
                  />
                </div>
              ) : null}
              <div className="email">
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Entry your email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="password">
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Entry your password"
                  onChange={handleChange}
                  value={password}
                />
              </div>
              {formType === "signup" ? (
                <div className="phone">
                  <Input
                    id="phone"
                    label="Phone"
                    type="text"
                    placeholder="Entry your phone number"
                    onChange={handleChange}
                    value={phone}
                  />
                </div>
              ) : null}
              <div className="submit">
                <Button type="submit">
                  {formType === "signup" ? "Create Account" : "Login"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormUser;
