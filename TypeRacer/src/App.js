import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./Components/Practice";
import Statistics from "./Components/Statistics";
import About from "./Components/About";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Practice />
          </Route>
          <Route exact path="/typeracer">
            <Practice />
          </Route>

          <Route exact path="/statistics">
            <Statistics />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
