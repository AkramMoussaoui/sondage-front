import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sondage from "./components/Sondage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div style={{ width: "80%" }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/sondage">Sondage</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/sondage">
              <Sondage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
