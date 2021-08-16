import {Form, Button, Col, Row} from 'react-bootstrap';


const SearchErd = (props) => {

    let erdAddress = props.erdAddress;
    const setErdAddress = props.setErdAddress;

    const handleClick = () => {
        setErdAddress("It changed!");
    };

    return ( 
        <>
        <Row>
            <Col lg="2"></Col>
            <Col lg="8">
                <Form>
                    <Form.Group className="mb-3" controlId="myErdForm">
                        <Form.Control type="email" placeholder="erd..." />
                    </Form.Group>
                </Form>
            </Col>
            <Col lg="1">
            <Button onClick={handleClick} variant="dark" type="submit">
                Submit
            </Button>
            </Col>
        </Row>

        <Row>
            <p>{erdAddress}</p>
        </Row>
        </>
        
     );
}
 
export default SearchErd;