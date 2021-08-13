import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";

function Home() {
    const title = "Welcome ! 🚀";
    return ( 
        <>
        <br></br>
        <Container >
            <Row lg="4" fluid="md" className="shadow-lg">
                <Col lg="12">
                    <h1>{title}</h1>
                    <br />
                    <h5>Please input an elrond adress:</h5>
                    <Search />
                </Col>
            </Row>
            
            
        </Container>
        </>
        
     );
};
 
export default Home;