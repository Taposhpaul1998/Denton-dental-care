import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div style={{ height: '400px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }
    return children;
};

export default RequireAuth;