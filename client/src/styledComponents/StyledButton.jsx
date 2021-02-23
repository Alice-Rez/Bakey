import styled, { css } from "styled-components";
import colors from "./colors";
import { darken } from "polished";
import device from "./device";

export const StyledButton = styled.button`
  /* basic button style for yellow buttons */
  font-family: var(--headings);
  background-color: ${colors.accent1};
  border: var(--border) solid transparent;
  color: var(--black);
  font-size: 1rem;
  padding: var(--space-s) var(--space-m);
  border-radius: calc(2 * var(--border-radius));
  text-transform: uppercase;
  letter-spacing: var(--ls);
  font-weight: 700;
  transition: background-color 200ms;

  :hover {
    cursor: pointer;
    background-color: ${darken(0.1, colors.accent1)};
  }
  :active {
    background-color: white;
    border: var(--border) solid ${colors.accent1};
    color: var(--black);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* basic style for pink buttons */
  ${(props) =>
    props.cafe &&
    css`
      background-color: ${colors.accent2};
      :hover {
        cursor: pointer;
        background-color: ${darken(0.1, colors.accent2)};
      }
      :active {
        background-color: white;
        border: var(--border) solid ${colors.accent2};
        color: var(--black);
      }
    `};

  /* yellow buttons in the listing component */
  ${(props) =>
    props.buy &&
    css`
      padding: var(--space-xs) var(--space-m);
      border: var(--border) solid ${colors.accent1};
      border-radius: calc(var(--border-radius) * 2);
      background-color: ${colors.accent1};
      font-size: 0.8rem;
      margin: 0 0 var(--space-s) 0;
      :hover {
        cursor: pointer;
        border: var(--border) solid ${darken(0.1, colors.accent1)};
        background-color: transparent;
      }
      @media ${device.tabletLandscape} {
        margin: var(--space-s);
      }
    `}

  /* prop to proper display the button in the grid for cafe registration */
  ${(props) =>
    props.cafeRegister &&
    css`
      grid-area: register;
      justify-self: center;
    `}
`;

export const StyledSmallButton = styled.button`
  background: none;
  border: none;
  font-family: var(--headings);
  text-align: left;
  font-size: 1rem;
  padding: 0;
  @media ${device.desktop} {
    padding: var(--space-xs);
    border-radius: var(--border-radius);
    text-transform: uppercase;
    letter-spacing: var(--ls0);
    font-weight: 700;
    transition: all 200ms;
    background-color: ${colors.accent2};
    border: var(--border) solid ${colors.accent2};
    :hover {
      cursor: pointer;
      background-color: ${darken(0.1, colors.accent2)};
      border: ${darken(0.1, colors.accent2)} var(--border) solid;
    }
    :active {
      background-color: white;
      border: var(--border) solid ${darken(0.1, colors.accent2)};
      color: var(--black);
    }
  }
`;
