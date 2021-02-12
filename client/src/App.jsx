import GlobalStyle from "./styledComponents/GlobalStyle";

import Warning from "./components/Warning";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";

// this style is just for preview purposes
const temporalAlign = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  return (
    <div style={temporalAlign}>
      <GlobalStyle />
      {/* <Warning msg="site is not found" /> */}
      <RegistrationUser />
      {/* <Login /> */}
    </div>
  );
}

export default App;
