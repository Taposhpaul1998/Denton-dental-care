import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const Signup = () => {
    return (
        <div>
            <div className='w-50 mx-auto border rounded m-4 p-3'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your aame</Form.Label>
                        <Form.Control type="name" placeholder="Your aame" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <a className='forget-password'>Forgot Password ?</a>
                    <br />
                    <Button className='w-50 mx-auto mt-2 d-block' variant="primary" type="submit">
                        Signup
                    </Button>

                </Form>
                <div className='mt-2 or-conteiner'>
                    <div className='w-50' ></div>
                    <p>or</p>
                    <div className='w-50' ></div>
                </div>
                <Social></Social>
            </div>
        </div>
    );
};

export default Signup;