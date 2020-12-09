import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Session/AuthContext";
import PersonOutlineIcon  from '@material-ui/icons/PersonOutline';
import "./style.css";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="d-flex w-100 justify-content-center ml-3">
                <ReactBootStrap.Nav.Link as={Link} to="/">SHOP</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Navbar.Brand id="desktop-logo" style={{marginLeft: '16px'}}>
                    <Link to="/">SwankyStudios</Link>
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Nav.Link as={Link} to="/">BOOK</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        <Link id="myaccount-logo" to="/myaccount" inline>
            <PersonOutlineIcon />
        </Link>
      </ReactBootStrap.Navbar>
    </>
  );
};

export default Navbar;
