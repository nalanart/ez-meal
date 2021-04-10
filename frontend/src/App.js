import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./pages/Landing";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Menu from "./pages/Menu";
import Pricing from "./pages/Pricing";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || "false"
  );

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    setIsLoggedIn("true");
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(null));
    setIsLoggedIn("false");
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar isLoggedIn={isLoggedIn} logout={logout} />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              isLoggedIn === "false" ? <Landing /> : <Home user={user} />
            }
          />
          <Route
            path="/login"
            render={(props) => <Login logInUser={login} setUser={setUser} />}
          />
          <Route path="/register" component={Register} />
          {/* <Route path="/recipes" render={props => <Recipes bundleSelected={bundleSelected} />} /> */}
          <Route path="/menu" component={Menu} />
          <Route path="/pricing" component={Pricing} />
          <Route
            path="/checkout"
            render={(props) => <Checkout user={user} />}
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
