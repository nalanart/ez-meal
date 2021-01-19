import './App.css';
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import Landing from './components/Landing'
import Home from './components/Home'
import Recipes from './components/Recipes'
import Cart from './components/Cart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || 'false')

  const login = data => {
    setUser(data)
    setIsLoggedIn('true')
    localStorage.setItem('isLoggedIn', 'true')
  }
  
  const logout = () => {
    setIsLoggedIn('false')
    localStorage.setItem('isLoggedIn', 'false')
  }

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} logout={logout} />
      <Router>
        <Switch>
          <Route exact path="/" render={props => isLoggedIn === 'false' ? (
            <Landing />
          ) : (
            <Home user={user} />
          )}>
          </Route>
          <Route path="/login" render={props => <Login logInUser={login} setUser={setUser} />} />
          <Route path="/register" component={Register} />
          {/* <Route path="/recipes" render={props => <Recipes bundleSelected={bundleSelected} />} /> */}
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
