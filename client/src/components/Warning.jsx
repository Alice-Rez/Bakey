import React from "react";
import StyledWarning from "../styledComponents/StyledWarning";

export default function Warning(props) {
  return (
    <div>
      <StyledWarning>
        <h2>OOPS!</h2>
        <p>It looks like {props.msg} </p>
      </StyledWarning>
    </div>
  );
}
