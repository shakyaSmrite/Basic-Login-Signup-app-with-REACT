import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState({});
  const [loggedIn, setLoggedIn] = useState(["", ""]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <HomePage loggedIn={loggedIn} />
          </Route>
          <Route path="/login">
            <Login users={users} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/signup">
            <SignUp users={users} setUsers={setUsers} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
