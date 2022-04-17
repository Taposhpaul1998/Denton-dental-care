import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Social.css'

const Social = () => {
    return (
        <div>
            <div>
                <Button className='w-50 mx-auto mt-2 d-block' variant="primary" type="submit">
                    Google Login
                </Button>
                <Button className='w-50 mx-auto mt-2 d-block mb-4' variant="primary" type="submit">
                    Github Login
                </Button>
                <p className='text-center'>Don’t have an account?<Link className='register' to="/signup"> Register</Link></p>
            </div>
        </div>
    );
};

export default Social;