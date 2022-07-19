import "./styles.css";

import Home from "./pages/Home";
import Repository from "./pages/Repository";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:owner/:repo">
            <Repository />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
