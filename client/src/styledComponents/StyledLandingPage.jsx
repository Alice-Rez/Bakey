import styled from "styled-components";
import colors from "../styledComponents/colors";
import device from "./device";
import { lighten} from "polished";

import hero from "../assets/hero.jpg";

export const StyledHeader = styled.header`
  width: 100%;
  margin: auto;
  height: 800px;

  background-image: url(${hero});
  background-repeat: no-repeat;
  background-origin: content-box;
  background-clip: content-box;
  background-size: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${device.tabletPortrait} {
    background-attachment: fixed;
  }

  /* better position for the background image on desktop */
  @media (min-width: 1190px) {
    background-position: center 40%;
  }

  .headingContainer {
    margin-top: 2rem;
    @media ${device.tabletPortrait} {
      margin-top: 16rem;
    }
  }

  h1 {
    margin: var(--space-s);
    text-transform: uppercase;
    letter-spacing: var(--ls);
    color: white;
    text-shadow: 0px 0px 6px #666;
    font-size: 3rem;
    text-align: center;
  }
`;

export const StyledCTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tabletPortrait} {
    flex-direction: row;

    > button {
      margin-left: 3rem;
    }
  }
`;

export const StyledDesc = styled.div`
  background: white;
  padding: var(--space-s) var(--space-m);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-top: 3rem;

  @media ${device.mobile} {
    margin-top: 6rem;
  }

  h2 {
    line-height: 29px;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: none;
    letter-spacing: 0;
  }

  @media (max-width: 600px) {
    margin-left: var(--space-s);
    margin-right: var(--space-s);
  }
`;

export const StyledTitle = styled.span`
  color: ${colors.accent2};
  text-align: center;
  padding: var(--space-m);

  > h2 {
    @media (max-width: 600px) {
      padding-left: var(--space-s);
      padding-right: var(--space-s);
    }
  }
`;
export const StyledMain = styled.main`
  width: 100%;
  margin-top: calc(6 * var(--space-l));
`;
export const StyledCarousel = styled.div`
  padding: 30vh 0;
  background-color: ${lighten(0.18, colors.accent2)};
  clip-path: polygon(0 7%, 100% 15%, 100% 100%, 0 90%);
  margin-top: calc(-1 * var(--space-l));
  display: flex;
  justify-content: center;

  .carrousel-container {
    width: 100%;
    max-width: 500px;
    display: none;
    @media ${device.tabletPortrait} {
      display: block;
    }
    @media ${device.tabletLandscape} {
      max-width: 700px;
    }
    > .slick-slider > button::before {
      color: ${colors.black};
      font-size: 25px;
    }
  }
  .carrousel-card {
    width: inherit;
    margin: 1rem;

    img {
      height: 250px;
      margin: auto;
      @media ${device.tabletLandscape} {
        height: 480px;
      }
    }
    h3 {
      text-align: center;
      padding: 0 1rem;
    }
  }
`;

export const StyledNoCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tabletPortrait} {
    display: none;
  }

  .carrousel-card {
    width: inherit;
    margin: 2rem 0;


    img {
      /* height: 250px; */
      margin: auto;
   
    }
    h3 {
      text-align: center;
      font-size: 0.8rem;
      margin: inherit 0;
      padding: 1rem;
    }
`;

export const StyledAbout = styled.section`
  width: 80%;
  padding: var(--space-l);
  background-color: ${lighten(0.28, colors.gray)};
  margin: 30vh auto;
  border-radius: var(--border-radius);
  text-align: center;

  @media ${device.tabletPortrait} {
    width: 60%;
  }
  p {
    line-height: 29px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  button {
    margin: var(--space-s) 0;
  }
`;

export const StyledEndSoon = styled.section`
  clip-path: polygon(0 100px, 100% 0, 100% 100%, 0 100%);
  padding: 20vh 0;
  background-color: rgb(252, 230, 152);
  > div {
    display: flex;
    flex-direction: column;
    > * {
      margin: var(--space-m) auto;
    }
    @media (max-width: 600px) {
      padding-left: var(--space-s);
      padding-right: var(--space-s);
    }
  }
`;

export const StyledForCafe = styled.section`
  margin: 15vh 0 30vh 0;
  padding: var(--space-l);
  display: flex;
  align-items: center;
  flex-direction: column;
  > h3 {
    text-align: center;
    padding: var(--space-m);
    @media ${device.tabletLandscape} {
      text-align: left;
    }
  }
  @media ${device.tabletLandscape} {
    flex-direction: row;
  }
`;
