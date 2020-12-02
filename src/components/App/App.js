import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "../Generic/Navbar";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { Container } from "react-bootstrap"
import { withAuthentication } from '../Session';

function App() {
  return (
    <Router>
      <Nav />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

//It wraps the App with the AuthContext provider AFTER the FirebaseContext provider
export default withAuthentication(App);
