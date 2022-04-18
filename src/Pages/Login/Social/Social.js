import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error2) {
        errorElement = <p className="text-danger"> Error:{error?.message} {error2?.message}</p>
    }
    if (user || user2) {
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
                <Button onClick={() => signInWithGithub()} className='w-50 mx-auto mt-2 d-block mb-4' variant="primary" type="submit">
                    Github Login
                </Button>

            </div>
        </div>
    );
};

export default Social;