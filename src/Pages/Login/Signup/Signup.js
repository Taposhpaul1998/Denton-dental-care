import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user) {
        navigate('/')
    }
    const handelSignup = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
    }

    return (
        <div>
            <div className='w-50 mx-auto border rounded m-4 p-3'>
                <h2 className='text-center text-primary'>Please Register</h2>
                <Form onSubmit={handelSignup}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your aame</Form.Label>
                        <Form.Control ref={nameRef} type="name" placeholder="Your aame" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? "text-primary" : ''} label="Accept Trams and Condition" />
                    </Form.Group>
                    <p className='forget-password'>Forgot Password ?</p>
                    <br />
                    <Button disabled={!agree} className='w-50 mx-auto mt-2 d-block' variant="primary" type="submit">
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