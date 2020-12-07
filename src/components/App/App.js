import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../Generic/Navbar";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import MyAccount from './../Pages/MyAccount';
import PrivateRoute from './../Session/PrivateRoute';
import { withAuthentication } from "../Session";

function App() {
  return (
    <Router>
      <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/myaccount" component={MyAccount} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
    </Router>
  );
}

//It wraps the App with the AuthContext provider AFTER the FirebaseContext provider
export default withAuthentication(App);
