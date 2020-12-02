import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Session/AuthContext";
import "./style.css";

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout();
        } catch {
            setError('Failed to log out')
        }
    }

    /*
    return ( 
        <>
        Hi { console.log(currentUser) }
        </>
    );
    */

    return (
        <>
            <ReactBootStrap.Navbar collapseOnSelect style={{minHeight: '5vh'}}expand="xl" bg="danger" variant="dark">
                <ReactBootStrap.Navbar.Brand>SwankyStudios</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/signup">
                            <ReactBootStrap.Nav.Link>{(currentUser) ? "Show" : "No Show"}</ReactBootStrap.Nav.Link>
                        </Link>
                        <ReactBootStrap.Nav.Link to="/pricing">Pricing</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        {
                            (!currentUser) ? (
                                <Link to="/login">
                                    Login
                                </Link>
                            ) : (
                                <Button variant="link" onClick={handleLogout}>
                                    Log out
                                </Button>
                            )
                        }
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </>
    );
};

export default Navbar;
