import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Form} from "react-bootstrap";

function LoginForm ({setTypeForm}){
    return <div>
        <h1>Авторизация</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <p>Нет аккаунта? <a onClick={()=> setTypeForm(true)} href={"#reg"}>Регистрация</a>.</p>
    </div>
}

export default LoginForm;