import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BTCTicker from './BTCTicker';

class MyNavbar extends React.Component{
    render() {
        return ( 
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">SpyMe</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/chart">EGLD Chart</Nav.Link>
                        <Nav.Link href="https://elrond.com/" target="_blank">Elrond Website</Nav.Link>
                        <Nav.Link href="https://twitter.com/big_q__" target="_blank">Contact Me</Nav.Link>
                    </Nav>
                    <Nav className="sm">
                        <Navbar.Collapse >
                            <Nav.Link href="https://www.coingecko.com/fr/pi%C3%A8ces/bitcoin" target="_blanck">
                                <BTCTicker /> 
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
         );
    }
}
 
export default MyNavbar;