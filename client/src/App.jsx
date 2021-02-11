import GlobalStyle from "./styledComponents/GlobalStyle";

import Warning from "./components/Warning";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Warning msg="site is not found" />
      <Registration />
      <Login />
    </div>
  );
}

export default App;
