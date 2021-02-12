const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`

:root {
  --logo: 'Montserrat Alternates', sans-serif;;
  --headings: 'Montserrat', sans-serif;
  --text: 'Raleway', sans-serif;

  --space-small: 0.75em;
  --space-medium: 1.5em;
  --space-larger: 2em;
  --space-large: 3em;

  --border: 2px;


}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--headings);
  color: #4A4A4A;
}

p {
  font-family: var(--text);
}
`;

export default GlobalStyle;