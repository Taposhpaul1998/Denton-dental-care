import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement = <p className="text-danger">Error:{error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handelLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='w-50 mx-auto border rounded m-4 p-3'>
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='forget-password' onClick={resetPassword} >Forgot Password ?</p>
                <br />
                {errorElement}
                <Button className='w-50 mx-auto mt-2 d-block' variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <p className='text-center mt-2'>Don’t have an account?<Link className='register' to="/signup"> Register</Link></p>
            <div className='mt-2 or-conteiner'>
                <div className='w-50' ></div>
                <p>or</p>
                <div className='w-50' ></div>
            </div>
            <Social></Social>
        </div>

    );
};

export default Login;