import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services-conteiner'>
            <h2 className='text-center services-title'>Our Services</h2>
            <Container>
                <CardGroup className='row'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </CardGroup>
            </Container>
        </div>
    );
};

export default Services;