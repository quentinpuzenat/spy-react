import { Container, Row, Col } from "react-bootstrap";
import SearchErd from "./SearchErd";
import AddressInfos from "./AddressInfos";
import { useState } from "react";


function Home() {
    const title = "Welcome ! 🕵️";

    let [erdAddress, setErdAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedAddress = { erdAddress };
        console.log(submittedAddress)
    }

    return ( 
        <>
        <br></br>
        <Container >
            <Row lg="4" fluid="md">
                <Col lg="12">
                    <h1>{title}</h1>
                    <br />
                    <SearchErd erdAddress={erdAddress} setErdAddress={setErdAddress} handleSubmit={handleSubmit}/>
                </Col>
            </Row> 
            <br /> 
            <Row>
                <AddressInfos erdAddress={erdAddress} />
            </Row>
            
        </Container>
        </>

        
     );
};
 
export default Home;