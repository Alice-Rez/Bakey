import React, { useState } from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledOtherInputsContainer,
  StyledPhoto,
  StyledPhotoUpload,
} from "../styledComponents/StyledForm";
import { StyledButton } from "../styledComponents/StyledButton";
import Axios from "axios";

export default function ListingForm() {
  const [data, setData] = useState({});
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [warningValidation, setWarningValidation] = useState(false);
  const [photoSuccess, setPhotoSuccess] = useState(false);
  const [photoWarning, setPhotoWarning] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const getValue = (e) => {
    setWarning(false);
    setWarningValidation(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getPhoto = (e) => {
    setPhotoSuccess(false);
    setPhotoWarning(false);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    Axios({
      method: "POST",
      url: "/listings/addlisting",
      data: { data, image },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledCentered>
      <header>
        <h2>Add a new listing</h2>
      </header>

      <StyledForm listing>
        <header>
          <h2>Fill out:</h2>
        </header>
        <StyledOtherInputsContainer cafe>
          <header>Upload photo</header>
          <StyledPhotoUpload cafe>
            <label htmlFor="upload-button">
              {image.preview ? (
                <div className="picContainer">
                  <img src={image.preview} alt="Listing" />
                </div>
              ) : (
                <StyledPhoto />
              )}

              <div>
                <small>Please use JPG or PNG in square format</small>
              </div>
            </label>

            <input
              type="file"
              name="userImg"
              id="upload-button"
              onChange={getPhoto}
            />
          </StyledPhotoUpload>
        </StyledOtherInputsContainer>
        <StyledInputContainer long>
          <StyledInputField
            cafe
            type="text"
            name="listingName"
            id="listingName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="listingName">Title*</StyledLabel>
          <div>
            {/* {msg.firstName ? <small>at least 1 char</small> : null} */}
          </div>
        </StyledInputContainer>

        <StyledOtherInputsContainer cafe>
          <header>Allergenes</header>
          <div>
            <input type="checkbox" id="cereal" name="cereal" />
            <label htmlFor="cereal">cereal</label>
          </div>
          <div>
            <input type="checkbox" id="eggs" name="eggs" />
            <label htmlFor="eggs">eggs</label>
          </div>
          <div>
            <input type="checkbox" id="peanut" name="peanut" />
            <label htmlFor="peanut">peanut</label>
          </div>
          <div>
            <input type="checkbox" id="soja" name="soja" />
            <label htmlFor="soja">soja</label>
          </div>
          <div>
            <input type="checkbox" id="dairy" name="dairy" />
            <label htmlFor="dairy">dairy</label>
          </div>
          <div>
            <input type="checkbox" id="celery" name="celery" />
            <label htmlFor="celery">celery</label>
          </div>
          <div>
            <input type="checkbox" id="mustard" name="mustard" />
            <label htmlFor="mustard">mustard</label>
          </div>
          <div>
            <input type="checkbox" id="lupins" name="lupins" />
            <label htmlFor="lupins">lupins</label>
          </div>
        </StyledOtherInputsContainer>
        <StyledOtherInputsContainer cafe>
          <header>Tags</header>
          <div>
            <input type="checkbox" id="vegan" name="vegan" />
            <label htmlFor="vegan">vegan</label>
          </div>
          <div>
            <input type="checkbox" id="organic" name="organic" />
            <label htmlFor="organic">organic</label>
          </div>
          <div>
            <input type="checkbox" id="glutenFree" name="glutenFree" />
            <label htmlFor="glutenFree">gluten-free</label>
          </div>
          <div>
            <input type="checkbox" id="lactoseFree" name="lactoseFree" />
            <label htmlFor="lactoseFree">lactose-free</label>
          </div>
          <div>
            <input type="checkbox" id="sugarFree" name="sugarFree" />
            <label htmlFor="sugarFree">sugar-free</label>
          </div>
          <div>
            <input type="checkbox" id="wheatFree" name="wheatFree" />
            <label htmlFor="wheatFree">wheat-free</label>
          </div>
        </StyledOtherInputsContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            min="1"
            max="20"
            type="number"
            name="piecePrice"
            id="piecePrice"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="piecePrice">Price for a piece (€)*</StyledLabel>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            min="1"
            max="20"
            type="number"
            name="availablePieces"
            id="availablePieces"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="availablePieces">
            Pieces in the cake*
          </StyledLabel>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            type="date"
            name="pickUpDate"
            id="pickUpDate"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="pickUpDate">Pick-up date*</StyledLabel>
        </StyledInputContainer>
        <StyledButton cafe>Save</StyledButton>
      </StyledForm>
    </StyledCentered>
  );
}
