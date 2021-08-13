import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

class MyNavbar extends React.Component{
    render() {
        return ( 
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">SpyMe</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="https://elrond.com/" target="_blank">Elrond Website</Nav.Link>
                <Nav.Link href="https://twitter.com/big_q__" target="_blank">Contact Me</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
         );
    }
}
 
export default MyNavbar;