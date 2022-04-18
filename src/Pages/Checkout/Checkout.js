import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    const hendelConfirm = () => {
        alert('Thanks to Confirm')
    }
    return (
        <div className='w-50 mx-auto border rounded m-4 p-3'>
            <h2 className='text-center text-primary'> Checkout </h2>
            <Form>
                <h5 className='text-center'>Personal Information</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="password" placeholder="Phone number" required />
                </Form.Group>

                <div className='emty'></div>

                <h5 className='text-center'>Payment Method</h5>
                <p>Credit cart</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control type="name" placeholder="Name on card" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="email" placeholder="Card Number" required />
                </Form.Group>

            </Form>
            <Button onClick={hendelConfirm} className='w-50 mx-auto mt-2 d-block' variant="primary" type="submit">
                Confirm To Pay
            </Button>
        </div>
    );
};

export default Checkout;