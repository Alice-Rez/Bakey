import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";
import Listing from "./Listing";

import {
  StyledHeader,
  StyledCTA,
  StyledTitle,
  StyledMain,
  StyledDesc,
  StyledCarrousel,
  StyledAbout,
  StyledEndSoon,
  StyledForCafe,
} from "../styledComponents/StyledLandingPage";
import {
  StyledInputContainer,
  StyledSelect,
  StyledLabel,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledButton } from "../styledComponents/StyledButton";

import StyledCentered from "../styledComponents/StyledCentered";
import Logo from "./Logo";

export default function LandingPage() {
  let history = useHistory();

  const { setCity } = useContext(bakeyContext);

  return (
    <StyledCentered>
      <StyledHeader>
        <div className="headingContainer">
          <Logo />
          <h1>Let them order cake!</h1>
          <StyledCTA>
            <StyledInputContainer>
              <StyledSelect
                landingPage
                id="city"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <option value="Leipzig">Leipzig</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Düsseldorf">Düsseldorf</option>
              </StyledSelect>
              <StyledLabel htmlFor="city">See offers from:</StyledLabel>
              <StyledArrow landingPage />
            </StyledInputContainer>
            <StyledButton
              onClick={() => {
                history.push("/cafes-list");
              }}
            >
              go
            </StyledButton>
          </StyledCTA>
          <StyledDesc>
            <h2>Support your local café and order a piece of cake.</h2>
            <h2> We will find other customers to bake the whole one.</h2>
          </StyledDesc>
        </div>
      </StyledHeader>

      <StyledMain>
        <StyledTitle>
          <h2>Easy as a piece of cake!</h2>
        </StyledTitle>
        <StyledCarrousel>
          <div></div>
        </StyledCarrousel>

        <StyledAbout>
          <StyledTitle>
            <h2>What is Bakey?</h2>
          </StyledTitle>
          <h3>
            Here we will have a paragraph about our project. Donut candy chupa
            chups pudding gummi bears gummies sweet tootsie roll muffin. Danish
            danish brownie dessert gummi bears. Cotton candy topping cake
            jelly-o carrot cake. Jelly-o cake toffee pudding gummies topping
            muffin carrot cake. Danish ice cream chupa chups tart chocolate cake
            powder sesame snaps chocolate. Biscuit tiramisu sweet sugar plum
            bonbon cupcake donut.
          </h3>
          <StyledButton
            onClick={() => {
              history.push("/cafes-list");
            }}
          >
            Explore Bakey
          </StyledButton>
          <h3>
            Here we will have a paragraph about our project. Donut candy chupa
            chups pudding gummi bears gummies sweet tootsie roll muffin. Danish
            danish brownie dessert gummi bears. Cotton candy topping cake
            jelly-o carrot cake. Jelly-o cake toffee pudding gummies topping
            muffin carrot cake. Danish ice cream chupa chups tart chocolate cake
            powder sesame snaps chocolate. Biscuit tiramisu sweet sugar plum
            bonbon cupcake donut.
          </h3>
          <StyledButton
            onClick={() => {
              history.push("/about-us");
            }}
          >
            About Us
          </StyledButton>
        </StyledAbout>
        <StyledTitle>
          <h2>This campaigns end soon!</h2>
        </StyledTitle>
        <StyledEndSoon>
          <div>
            <Listing />
            <Listing />
            <Listing />
          </div>
        </StyledEndSoon>
      </StyledMain>
      <StyledForCafe>
        <h3>Do you want to offer your products on Bakey? </h3>
        <StyledButton cafe>register</StyledButton>
      </StyledForCafe>
    </StyledCentered>
  );
}
