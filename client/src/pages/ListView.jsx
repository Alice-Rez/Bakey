import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";
import {
  StyledListView,
  StyledHeader,
  StyledViewWrapper,
} from "../styledComponents/StyledListView";
import Axios from "axios";
import {
  StyledLabel,
  StyledInputContainer,
  StyledSelect,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledTag } from "../styledComponents/StyledListing";
import Warning from "../components/Warning";
import CafeCard from "../components/CafeCard";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import StyledMap from "../styledComponents/StyledMap";
import cafeMarker from "../assets/newCafeMarker.png";

export default function ListView() {
  const [cityCoor, setCityCoor] = useState({
    lat: 51.3396955,
    lng: 12.3730747,
  });
  const [mapFlag, setMapFlag] = useState(false);
  const { cafes, setCafes, city, setCity, availableCities } = useContext(
    bakeyContext
  );
  const [filter, setFilter] = useState([]);
  const [dbError, setDbError] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loadCoor, setLoadCoor] = useState(false);

  let history = useHistory();

  const getCities = (city) => {
    console.log("calling for cafes for city", city);
    setDbError(false);
    setEmptyWarning(false);
    Axios({
      method: "POST",
      url: "/cafes",
      data: { city: city },
    })
      .then((res) => {
        if (res.data.length === 0) {
          setEmptyWarning(true);
          setCafes([]);
          setLoadCoor((prevValue) => {
            return !prevValue;
          });
        } else {
          setCafes(res.data);
          setMapFlag((prevValue) => {
            return !prevValue;
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setDbError(true);
      });
  };

  useEffect(() => {
    sessionStorage.removeItem("location");
    getCities(city);
  }, []);

  const getCityCoordinates = (API_KEY) => {
    Axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+germany&key=${API_KEY}`,
    })
      .then((res) => {
        let cityCoordinates = res.data.results[0].geometry.location;
        setCityCoor(cityCoordinates);
      })
      .catch((err) => {
        console.log("no results from GM");
      });
  };

  const getMapInfo = async (API_KEY) => {
    await cafes.map((cafe, i) => {
      let address = [
        cafe.cafeStreet.split(" ").join("+"),
        cafe.cafeStreetNr,
        cafe.cafeZip,
        cafe.city,
      ];
      let parsedAddress = address.join("+");
      Axios({
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${parsedAddress}+germany&key=${API_KEY}`,
      })
        .then(async (res) => {
          let location = res.data.results[0].geometry.location;
          await setCafes(() => {
            cafes[i] = {
              ...cafe,
              lat: location.lat,
              lng: location.lng,
            };
            return cafes;
          });
          setMapLoaded((prevValue) => {
            return !prevValue;
          });
        })
        .catch((err) => {
          console.log(err, "it didnt connected");
        });
    });
  };

  useEffect(() => {
    getMapInfo(process.env.REACT_APP_GOOGLE_API_KEY);
    getCityCoordinates(process.env.REACT_APP_GOOGLE_API_KEY);
  }, [mapFlag]);

  useEffect(() => {
    getCityCoordinates(process.env.REACT_APP_GOOGLE_API_KEY);
  }, [loadCoor]);

  const center = {
    lat: cityCoor.lat,
    lng: cityCoor.lng,
  };

  //necessary for the map

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const getFilter = (e) => {
    if (filter.includes(e.target.name)) {
      setFilter((prevFilter) =>
        prevFilter.filter((item) => item !== e.target.name)
      );
    } else {
      setFilter((prevFilter) => {
        return [...prevFilter, e.target.name];
      });
    }
  };

  return (
    <StyledListView>
      <StyledHeader>
        <StyledInputContainer>
          <StyledSelect
            id="city"
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              getCities(e.target.value);
            }}
          >
            {availableCities.map((cityElem) => {
              return (
                <option value={cityElem} key={cityElem}>{`${cityElem}`}</option>
              );
            })}
          </StyledSelect>
          <StyledLabel htmlFor="city">See offers from:</StyledLabel>
          <StyledArrow />
        </StyledInputContainer>

        <h2>Cafes in {city} with active campaigns:</h2>
        <div className="filtering">
          <p>Show only cafes that offer something:</p>
          <div className="tag-container">
            <label>
              <input type="checkbox" name="lactoseFree" onChange={getFilter} />
              <div>
                <StyledTag no lactose title="lactose free">
                  L
                </StyledTag>
                <p>lactose-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" name="glutenFree" onChange={getFilter} />
              <div>
                <StyledTag no gluten title="gluten free">
                  G
                </StyledTag>
                <p>gluten-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" name="sugarFree" onChange={getFilter} />
              <div>
                <StyledTag no sugar title="sugar free">
                  S
                </StyledTag>
                <p>sugar-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" name="wheatFree" onChange={getFilter} />
              <div>
                <StyledTag no wheat title="wheat free">
                  W
                </StyledTag>
                <p>wheat-free</p>
              </div>
            </label>
            <label>
              <input type="checkbox" name="vegan" onChange={getFilter} />
              <div>
                <StyledTag vegan title="vegan">
                  V
                </StyledTag>
                <p>vegan</p>
              </div>
            </label>
            <label>
              <input type="checkbox" name="organic" onChange={getFilter} />
              <div>
                <StyledTag organic title="organic">
                  O
                </StyledTag>
                <p>organic</p>
              </div>
            </label>
          </div>
        </div>
      </StyledHeader>
      {dbError === true ? <Warning msg="the server is out of service" /> : null}
      <StyledViewWrapper>
        <article>
          {emptyWarning === false ? (
            cafes.map((cafe, index) => {
              if (
                !filter.length ||
                cafe.cafeListings.some((listing) =>
                  listing.listingTags.some((tag) => filter.includes(tag))
                )
              ) {
                return <CafeCard key={index} cafe={cafe} />;
              } else {
                return null;
              }
            })
          ) : (
            <Warning msg={`there are no offers available for ${city}`} />
          )}
        </article>
        {cafes.every((cafe) => cafe.lat && cafe.lng) ? (
          <StyledMap>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
              >
                {cafes.map((cafe) => {
                  if (
                    !filter.length ||
                    cafe.cafeListings.some((listing) =>
                      listing.listingTags.some((tag) => filter.includes(tag))
                    )
                  ) {
                    return (
                      <Marker
                        key={cafe._id}
                        title={cafe.cafeName}
                        icon={cafeMarker}
                        position={{ lat: cafe.lat, lng: cafe.lng }}
                        onClick={() => history.push(`/cafe:${cafe._id}`)}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </GoogleMap>
            </LoadScript>
          </StyledMap>
        ) : null}
      </StyledViewWrapper>
    </StyledListView>
  );
}
