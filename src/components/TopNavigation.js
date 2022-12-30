import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Pages } from "../util";

const TopNavigation = (props) => {
    //the extra parathesis allows this to return a function, rather than calling a function
    const updatePageHandler = (newPage) => () => {
        props.updatePage(newPage);
    }
   
    return (
        <Navbar bg="primary" expand="lg" className="ps-2 pe-2">
            <Container className="ms-0 me-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={updatePageHandler(Pages.Main)} className={(props.activePage === Pages.Main) ? "active-link" : ""}>Our Wedding</Nav.Link>
                        <Nav.Link onClick={updatePageHandler(Pages.Self)} className={(props.activePage === Pages.Self) ? "active-link" : ""}>Our Story</Nav.Link>
                        <Nav.Link onClick={updatePageHandler(Pages.Bios)} className={(props.activePage === Pages.Bios) ? "active-link" : ""}>Wedding Party</Nav.Link>
                        <Nav.Link onClick={updatePageHandler(Pages.Registry)} className={(props.activePage === Pages.Registry) ? "active-link" : ""}>Registry</Nav.Link>
                        <Nav.Link onClick={updatePageHandler(Pages.Hotel)} className={(props.activePage === Pages.Hotel) ? "active-link" : ""}>Accommodations</Nav.Link>
                        <Nav.Link onClick={updatePageHandler(Pages.RSVP)} className={(props.activePage === Pages.RSVP) ? "active-link" : ""}>RSVP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
    
export default TopNavigation;