import {Form, Button, Col, Row} from 'react-bootstrap';

const Search = () => {
    return ( 
        <>
        <Row>
            <Col lg="2"></Col>
            <Col lg="8">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="erd..." />
                    </Form.Group>
                </Form>
            </Col>
            <Col lg="1">
            <Button variant="dark" type="submit">
                Submit
            </Button>
            </Col>
        </Row>
        </>
     );
}
 
export default Search;