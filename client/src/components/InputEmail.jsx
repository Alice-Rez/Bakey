import React from "react";
import {
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
} from "../styledComponents/StyledInputs";

export default function InputText(props) {
  return (
    <StyledInputContainer>
      <StyledInputField
        type="email"
        name={props.name}
        id={props.name}
        placeholder=" "
        onInput={props.getValue}
        required={props.required}
      />
      <StyledLabel htmlFor={props.name}>
        {/* Functionality to try out when form is connected */}
        {/* {msg.email ? "Error" : "Email"} */}
        {props.name}
      </StyledLabel>

      {props.msg ? <small>Please use proper e-mail format</small> : null}
    </StyledInputContainer>
  );
}
