import Axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";

import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledEyeClose,
  StyledEye,
} from "../styledComponents/StyledForm";
import StyledButton from "../styledComponents/StyledButton";

export default function Login(props) {
  const [loginData, setData] = useState({});
  const [warning, setWarning] = useState(false);
  const { setIsLogged, setUserName, setProfilePic } = useContext(bakeyContext);
  const [visible, setVisible] = useState(false);

  let history = useHistory();

  const showPassword = () => {
    setVisible(true);
  };

  const hidePassword = () => {
    setVisible(false);
  };

  const getData = (e) => {
    setWarning(false);
    setData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("request send", loginData);

    Axios({
      method: "POST",
      url: "/users/login",
      data: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.logged) {
          console.log(res.data);
          setIsLogged(true);
          setUserName(res.data.firstName);
          setProfilePic(res.data.profilePic);
          setData({});
        } else {
          setWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        //display out of order component
      });
  };

  return (
    <section>
      <StyledForm onSubmit={submit}>
        <header>
          <h2>Login</h2>
        </header>
        <StyledInputContainer>
          <StyledInputField
            type="email"
            name="email"
            id="email"
            placeholder=" "
            onInput={getData}
            required={true}
          />
          <StyledLabel htmlFor="email">Email</StyledLabel>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            placeholder=" "
            onInput={getData}
            required={true}
          />
          <StyledLabel htmlFor="password">Password</StyledLabel>
          {visible ? (
            <StyledEye onClick={hidePassword} />
          ) : (
            <StyledEyeClose onClick={showPassword} />
          )}
        </StyledInputContainer>
        <StyledButton>Log in</StyledButton>
        {warning ? (
          <div>
            <p>
              Access denied! Combination of the e-mail and password is not
              correct
            </p>
          </div>
        ) : null}
      </StyledForm>
    </section>
  );
}
