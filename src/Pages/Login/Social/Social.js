import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className="text-danger"> Error:{error?.message}</p>
    }
    if (user) {
        navigate("/")
    }
    return (
        <div>
            <div className='mb-2'>
                {errorElement}
            </div>
            <div>
                <Button onClick={() => signInWithGoogle()} className='w-50 mx-auto mt-2 d-block' variant="primary" type="submit">
                    Google Login
                </Button>

            </div>
        </div>
    );
};

export default Social;