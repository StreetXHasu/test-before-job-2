import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import RegForm from "./components/reg.js";
import LoginForm from "./components/login";



function App () {
    const [typeForm,setTypeForm] = useState(true);

        return (
            <Container style={{maxWidth: 500}}>
                <Row>
                    <Col>
                        {typeForm ? <RegForm setTypeForm={setTypeForm}/> : <LoginForm setTypeForm={setTypeForm}/> }
                    </Col>
                </Row>
            </Container>
        );
}

ReactDOM.render(<App />,document.getElementById('root'));