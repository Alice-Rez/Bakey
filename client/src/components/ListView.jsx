import React, { useContext, useState} from "react";
import { bakeyContext } from "../Context";
import { StyledListView } from "../styledComponents/StyledListView";
import Axios from "axios";
import ListViewCafe from "./CafeCard";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import {
  StyledTag,
  StyledTagContainer,
} from "../styledComponents/StyledListing";
import Warning from "./Warning";

export default function ListView() {
  const [registeredCafes, setRegisteredCafes] = useState([]);
  const [city, setCity] = useState({city: "Leipzig"});
  const {setCafes} = useContext(bakeyContext);
  const [dbError, setDbError] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false)

   return (
    <div>
      <StyledListView>
        <StyledInputContainer>
          <StyledSelect id="city" name="city" onChange={(e) => {
    setCity(prevData => {return {[e.target.name]: e.target.value }});
    Axios({
      method: "POST",
      url: "/cafes",
      data: {city: e.target.value},
    })
      .then((res) => {
        if (res.data.length === 0) {
          setEmptyWarning(true);
        } else 
       { setEmptyWarning(false);
         setRegisteredCafes(res.data);
        setCafes(res.data);}

      })
      .catch((err) => {
        console.log(err)
        setDbError(true);
      });
  }}>
            <option value="Leipzig">Leipzig</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Düsseldorf">Düsseldorf</option>
          </StyledSelect>
          <StyledLabel htmlFor="city">See offers from:</StyledLabel>
          <StyledArrow />
        </StyledInputContainer>
        <div>
          <h3>Cafes in {city.city} with active campaigns:</h3>
          <p>Show only cafes that offer something:</p>
          <StyledTagContainer> 
            <div>
            <StyledTag no lactose title="lactose free">
              L
            </StyledTag>
            <p>Lactose free</p>
            </div><div>
            <StyledTag no gluten title="gluten free">
              G
            </StyledTag>
            <p>Gluten Free</p></div><div>
            <StyledTag no sugar title="sugar free">
              S
            </StyledTag>
            <p>Sugar Free</p></div><div>
            <StyledTag vegan title="vegan">
              V
            </StyledTag>
            <p>Vegan</p></div><div>
            <StyledTag organic title="organic">
              O
            </StyledTag>
            <p>Organic</p></div>
          </StyledTagContainer>
        </div>
        {dbError === true ? <Warning msg="the server is out of service"/> : null}
        {emptyWarning === true ? <Warning msg="there are no offers available for this city"/> : null}
        {emptyWarning === false ? registeredCafes.map((i) => {
          return <ListViewCafe props={i} />;
        }) : null }
      </StyledListView>
    </div>
  );
}
