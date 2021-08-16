import {Form, Button, Col, Row} from 'react-bootstrap';


const SearchErd = (props) => {

    let erdAddress = props.erdAddress;
    const setErdAddress = props.setErdAddress;

    const handleClick = () => {
        setErdAddress("It changed!");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //let address = erdAddress;
        console.log(erdAddress);
    }

    return ( 
        <>
        <Row>
            <Col lg="2"></Col>
            <Col lg="8">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="myErdForm">
                        <Form.Control type="email" placeholder="erd..." />
                    </Form.Group>
                </Form>
                {/* <form action="">
                    <label htmlFor="">Please input an elrond address:</label>
                    <input type="text" required value="" />
                </form> */}


            </Col>
            <Col lg="1.5">
            <Button onClick={handleClick} variant="dark" type="submit">
                SPY !
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