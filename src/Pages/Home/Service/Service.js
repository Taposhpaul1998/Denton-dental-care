import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { name, price, Img, details } = service;
    const navigate = useNavigate();
    const handelAppointment = () => {
        navigate("/checkout")
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-4'>
            <Card>
                <div className='card-img'>
                    <img src={Img} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p>Price: ${price}</p>
                </Card.Body>
                <Button onClick={handelAppointment} className='appointment'> Make an Appointment</Button>
            </Card>
        </div>
    );
};

export default Service;