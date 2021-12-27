import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import { Link, useHistory } from "react-router-dom";

const Navbar1 = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="./logo512.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Graces Travels
                </Navbar.Brand>
                <Link to="/login">Login</Link>
            </Container>
        </Navbar>
     );
}
 
export default Navbar1;