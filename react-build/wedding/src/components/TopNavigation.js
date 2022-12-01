import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Pages } from "../util";

const TopNavigation = (props) => {
    const mainPageHandler = () => {
        props.updatePage(Pages.Main)
    }

    const storyHandler = () => {
        props.updatePage(Pages.Self);
    }

    const accomodationsHandler = () => {
        props.updatePage(Pages.Hotel)
    }
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={mainPageHandler}>Our Wedding</Nav.Link>
                        <Nav.Link onClick={storyHandler}>Our Story</Nav.Link>
                        <Nav.Link onClick={accomodationsHandler}>Accommodations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        /*
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">          
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="./index.html">Our Wedding</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./ourstory.html">Our Story</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./accommodations.html">Accommodations</a>
                </li>
                </ul>            
            </div>
            </div>
        </nav>
        */
    );
}
    
export default TopNavigation;