import styled, { css } from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten } from "polished";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "styled-icons/material-sharp";
import { Link } from "react-router-dom";

export const StyledListingContainer = styled.article`
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-rows: 400px auto;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin: auto;

  @media ${device.tabletLandscape} {
    max-width: 800px;
    min-height: 400px;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
  }

  ${(props) =>
    props.cafeDashboard &&
    css`
      margin: 0 auto var(--space-l);
    `}
`;

export const StyledPhotoContainer = styled.figure`
  height: 400px;
  margin: 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledDescContainer = styled.div`
  background-color: ${lighten(0.28, colors.gray)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-s) var(--space-xs);
  min-height: 500px;
  padding-bottom: var(--space-s);
  @media ${device.tabletLandscape} {
    min-height: 400px;
  }

  > header {
    text-align: center;
    margin: 0;

    > h3 {
      margin: 0;
    }
    /* cafe name */
    > span {
      padding: var(--space-xs) 0;
      font-size: 0.9rem;
    }
  }

  /* container with timers and btn container */
  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: var(--space-s);
    > section > span,
    > section > strong {
      font-size: 0.9rem;
    }
    @media ${device.tabletLandscape} {
      margin: 0;
      > section > span,
      > section > strong {
        font-size: 0.8rem;
      }
    }
  }
  /* amount of pieces left */
  > span {
    font-size: 0.9rem;
  }
`;

export const StyledMore = styled(KeyboardArrowDown)`
  width: 1.5rem;
  cursor: pointer;
  display: ${(props) => props.display};
`;

export const StyledLess = styled(KeyboardArrowUp)`
  width: 1.5rem;
  cursor: pointer;
  display: ${(props) => props.display};
`;

export const StyledAllergenesContainer = styled.div`
  padding: var(--space-xs);
  display: ${(props) => (props.display ? "block" : "none")};
  > p {
    margin: 0;
    font-size: 0.7rem;
    font-weight: 700;
    text-align: center;
    display: inline;
  }
`;

export const StyledTagContainer = styled.div`
  display: ${(props) => props.display};
  justify-content: center;
  width: 192px;
  height: 2rem;
  margin: var(--space-xs) auto;

  /* ${(props) =>
    props.listview &&
    css`
      width: auto;
      height: auto;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      div {
        display: flex;
        align-items: center;
      }

      div > p {
        padding-right: var(--space-xs);
      }
    `} */
`;

export const StyledTag = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 700;
  padding: calc(var(--space-xs) / 2.5);
  margin-right: var(--space-xs);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.no &&
    css`
      ::after {
        content: "";
        height: 2rem;
        width: 2px;
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: -5px;
        transform: rotate(45deg);
      }
    `}

  ${(props) =>
    props.vegan &&
    css`
      background-color: ${colors.vegan};
    `};
  ${(props) =>
    props.organic &&
    css`
      background-color: ${colors.organic};
    `};
  ${(props) =>
    props.lactose &&
    css`
      background-color: ${colors.lactose};
    `};
  ${(props) =>
    props.gluten &&
    css`
      background-color: ${colors.gluten};
    `};
  ${(props) =>
    props.sugar &&
    css`
      background-color: ${colors.sugar};
    `};
  ${(props) =>
    props.wheat &&
    css`
      background-color: ${colors.wheat};
    `}
`;

export const StyledTimers = styled.div`
  display: grid;
  column-gap: calc(2 * var(--space-l));
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: btn;
  margin-top: var(--space-s);
  padding: 0 var(--space-s);
  gap: var(--space-s);

  @media ${device.tabletLandscape} {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  color: #4a4a4a;
  text-decoration: none;
  border-bottom: 3px solid #ed8db2;
  :hover {
    border-bottom: 3px solid transparent;
  }
`;

export const StyledMessage = styled.p`
  color: ${colors.black};
  font-weight: 900;
  padding: 0 var(--space-s);

  ${(props) =>
    props.warning &&
    css`
      color: ${colors.accent2};
    `};
`;
