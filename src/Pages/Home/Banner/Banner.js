import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../imges/banner/banner (1).jpg'
import banner2 from '../../../imges/banner/banner (2).jpg'
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    const handelAppointment = () => {
        navigate("/checkout")
    }

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='banner-info'>
                            <h3>Sajib Denter care</h3>
                            <p>Great Smile For Healthy Lifestyle!</p>
                            <Button onClick={handelAppointment} className='appointment'> Make an Appointment</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='banner-info'>
                            <h3>Sajib Denter care</h3>
                            <p>Great Smile For Healthy Lifestyle!</p>
                            <Button onClick={handelAppointment} className='appointment'> Make an Appointment</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;