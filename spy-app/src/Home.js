import { Container, Row, Col } from "react-bootstrap";
import SearchErd from "./SearchErd";
import AddressInfos from "./AddressInfos";
import { useState, useCallback } from "react";


function Home() {
    const title = "Welcome ! 🕵️";

    let [erdAddress, setErdAddress] = useState("");
    let [allData, setAllData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedAddress = { erdAddress };
        console.log(submittedAddress)
    }

    // callback function used to have elrond json data in Home
    // we pass this callback function to AddressInfos props
    const callbackData = useCallback((allData) => {
        setAllData(allData);
      }, []);

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
                <AddressInfos erdAddress={erdAddress} parentCallback={callbackData}/>
            </Row>
            <div>{JSON.stringify(allData)}</div>
            <div>{erdAddress[0]}</div>
            
        </Container>
        </>
        
     );
};
 
export default Home;