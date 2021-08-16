import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import SearchErd from "./SearchErd";

function Home() {
    const title = "Welcome ! 🕵️";
    const [erdAddress, setErdAddress] = useState("I don't have address yet");

    return ( 
        <>
        <br></br>
        <Container >
            <Row lg="4" fluid="md">
                <Col lg="12">
                    <h1>{title}</h1>
                    <br />
                    <h5>Please input an elrond address:</h5>
                    <SearchErd erdAddress={erdAddress} setErdAddress={setErdAddress}/>
                </Col>
            </Row>  
        </Container>
        </>
        
     );
};
 
export default Home;