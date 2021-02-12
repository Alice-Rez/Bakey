import styled from "styled-components";
import { darken } from "polished";
import colors from "./colors";
import { EyeClose, Eye } from "styled-icons/remix-line";

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  & small {
    padding: 5px;
    color: red;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  font-family: var(--heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  top: 1rem;
  left: 15px;
  transition: all 200ms ease-in-out;
`;

export const StyledInputField = styled.input`
  padding: 1rem;
  background-color: white;
  font-size: 1rem;
  font-family: var(--heading);
  border: var(--border) solid ${colors.gray};
  border-radius: 6px;

  :hover {
    cursor: text;
    border: var(--border) solid ${darken(0.2, colors.gray)};
  }
  :focus {
    outline: none;
    border: var(--border) solid ${colors.accent1};
  }

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 0.9rem;
    top: -0.5rem;
    left: 10px;
    background: white;
    padding: 0 0.2rem;
    letter-spacing: 2px;
  }
`;

export const StyledEyeClose = styled(EyeClose)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  cursor: pointer;
`;

export const StyledEye = styled(Eye)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 12px;
  top: 1.2rem;
  cursor: pointer;
`;
