import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='m-5 p-4 border rounded'>
                <h4>(1) Difference between authorization and authentication.</h4>
                <p>
                    Authorization is the process of verifying a user's access to a specific application, file or data. Authentication is the process of verification. Authentication access  one for only session or transaction. Authorization must always follow authentication. </p>

                <h4>(2) Why are you using firebase ? What other option do you have to implement authentication?</h4>
                <p>Firebase helps you build and run apps. Firebase is a product of google. Firebase manages data real-time database. Firebase helps develop high-quality apps and grow user base.

                    1.Password-based authentication. Passwords are the most common methods of authentication.
                    2.Multi-factor authentication.
                    3.Certificate-based authentication.
                    4.Biometric authentication.
                    5.Token-based authentication.
                </p>
                <h4> (3) What other services dose firebase provide other then authentication?</h4>
                <p>Firebase provide open source backend platform. Parse Hosting Platform provide firebase. Mobile backend as a service and Mobile API services provide firebase. Real-time APIs and global Messagin and Game backend provide in firebase.</p>
            </div>
        </Container>
    );
};

export default Blog;