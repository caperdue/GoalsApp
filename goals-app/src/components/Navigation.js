import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useAppContext, AppContext } from "../index.js"
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
    const { isAuthenticated, userHasAuthenticated } = useAppContext();
    const history = useHistory();
    
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Goals App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {isAuthenticated ? (
                        <>
                            <LinkContainer to="/goals">
                                <Nav.Link>My Goals</Nav.Link>
                            </LinkContainer>
                            <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                        </>
                    ) :
                        <LinkContainer to="/signin">
                            <Nav.Link>Sign In / Sign Up</Nav.Link>
                        </LinkContainer>
                    }
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar >
    )

    async function handleSignOut() {
        try {
            await Auth.signOut();
            userHasAuthenticated(false)
            history.goBack();

        }
        catch (error) {
            alert("Error signing out:", error);
        }
    }

}

export default Navigation