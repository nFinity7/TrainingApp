import React, {useState, useEffect} from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';



function InputForm(props) {

    const [input, setInput] = useState("");
    //listen to keypress the user did to input
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    // submit call the function attached to the props
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.length > 0) {
            props.onAdd(input);
        }
        else {

        }
        setInput("");
        
        
    }
    return (
        <div>
        <Form className="" onSubmit={handleSubmit}>
            <Container fluid className="mt-3 rcontainer-xl">
                <Row>
                    <Col xs={10}>
                        <Form.Control type="text" value={input} className="w-100 mx-auto inline " placeholder="Enter training here!" onChange={e => handleChange(e)}></Form.Control>
                    </Col>
                    <Col xs={1}>
                    <Button disabled={!input} variant="dark" className=""  type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mt-3 rcontainer-xs">
                    <Form.Control type="text" value={input} className="mx-auto inline input-training" placeholder="Enter training here!" onChange={e => handleChange(e)}></Form.Control>
                    <Button disabled={!input} variant="dark" className="mt-3"  type="submit">Submit</Button>
            </Container>
            
        </Form>
        </div>
    )
}



export default InputForm;
