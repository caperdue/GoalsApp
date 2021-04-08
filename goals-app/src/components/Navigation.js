import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useAppContext, AppContext } from "../index.js"
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

function Navigation() {
    const { isAuthenticated, userHasAuthenticated } = useAppContext();
    const history = useHistory();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Goals App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {isAuthenticated ? (
                    <>
                        <Nav.Link onClick={() => history.replace("/goals")} >My Goals</Nav.Link>
                        <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                    </>
                    ) : 
                    (<Nav.Link href="/signin">Sign In / Sign Up</Nav.Link>)}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar >
    )
    
    async function handleSignOut() {
        console.log("RAN")
        try {
            await Auth.signOut();
            userHasAuthenticated(false)
            
            history.goBack();

        }
        catch(error) {
            alert("Error signing out:", error);
        }
    }

}

export default Navigation