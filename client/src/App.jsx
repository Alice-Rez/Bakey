import GlobalStyle from "./styledComponents/GlobalStyle";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { bakeyContext } from "./Context";
import Login from "./components/Login";
import RegistrationUser from "./components/RegistrationUser";
import RegistrationCafe from "./components/RegistrationCafe";
import DashboardUser from "./components/DashboardUser";
import DashboardCafe from "./components/DashboardCafe";
import Navigation from "./components/Navigation";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState();

  return (
    <bakeyContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
      }}
    >
      <Router>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to bakey</h1>
          </Route>
          <Route path="/registration/user">
            <RegistrationUser />
          </Route>
          <Route path="/registration/cafe">
            <RegistrationCafe />
          </Route>
          <Route path="/user/dashboard">
            <DashboardUser />
          </Route>
          <Route path="/cafe/dashboard">
            <DashboardCafe />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            {" "}
            <Redirect to="/" />{" "}
          </Route>
        </Switch>
      </Router>
    </bakeyContext.Provider>
  );
}

export default App;
