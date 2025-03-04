import React, { FC } from 'react';
//Components
import './InteractivePricongStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

const InteractivePricongPage: FC = () => {
    return (
        <Container fluid className='vh-100 cs-bg-image d-flex flex-column align-items-center justify-content-center'>
            <Container className='cs-bg-logo text-center pt-5 pb-4'>
                <h1 className='h2 pb-2 cs-fw-800 cs-fc-dark-blue'>Simple, traffic-based pricing</h1>
                <p className='cs-fc-grey-blue'>Sign-up for our 30-day trial. No credit card required.</p>
            </Container>
            <Container>
                
            </Container>
        </Container>
    );
}

export default InteractivePricongPage;