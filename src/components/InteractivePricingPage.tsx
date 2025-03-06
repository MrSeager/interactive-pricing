import React, { FC, use, useState } from 'react';
//Components
import './InteractivePricongStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Badge, Image, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import CheckImg from '../images/icon-check.svg';

const allowedValues = [8, 12, 16, 24, 36];
const priceToPageViews = {
    8: '10K',
    12: '50K',
    16: '100K',
    24: '500K',
    36: '1M'
};

const InteractivePricongPage: FC = () => {
    const [pageViews, setPageViews] = useState(priceToPageViews[16]);
    const [price, setPrice] = useState(allowedValues[2]);
    const [yearlyPlan, setYearlyPlan] = useState(false);

    const handleChange = (e) => {
        const index = parseInt(e.target.value, 10);
        const newPrice = allowedValues[index];
        setPrice(newPrice);
        setPageViews(priceToPageViews[newPrice]);
        e.target.style.setProperty('--value', `${index / (allowedValues.length - 1) * 100}%`);
    };

    const handleSwitchChange = (e) => {
        setYearlyPlan(e.target.checked);
    };

    return (
        <Container fluid className='vh-100 cs-bg-image d-flex flex-column align-items-center justify-content-center gap-3'>
            <Container className='cs-bg-logo text-center pt-5 pb-4'>
                <h1 className='h2 pb-2 cs-fw-800 cs-fc-dark-blue'>Simple, traffic-based pricing</h1>
                <p className='cs-fc-grey-blue'>Sign-up for our 30-day trial. No credit card required.</p>
            </Container>
            <Container className='cs-w shadow rounded px-0 py-4 bg-white d-flex flex-column gap-3'>
                <Row className='mx-4'>
                    <Col xs={6} className='d-flex flex-row align-items-center'>
                        <h2 className='h6 cs-ls text-uppercase cs-fc-grey-blue'>{pageViews} pageviews</h2>
                    </Col>
                    <Col xs={6} className='d-flex flex-row align-items-center justify-content-center'>
                        <h2 className='h1 cs-fw-800 cs-fc-dark-blue'>${!yearlyPlan ? price : price - (price / 4)}.00</h2>
                        <h3 className='ms-2 h5 cs-fc-grey-blue'>/ monthly</h3>
                    </Col>
                    <Col xs={12}>
                        <Form.Control 
                            type="range" 
                            className="my-3 shadow-none border-0 cs-transition cs-range px-0" 
                            min="0" 
                            max={allowedValues.length - 1} 
                            step="1" 
                            value={allowedValues.indexOf(price)} 
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className='m-0'>
                    <Col xs={5} className='d-flex flex-row align-items-center justify-content-end'>
                        <h4 className='h6'>Monthly Billing</h4>
                    </Col>
                    <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            checked={yearlyPlan}
                            onChange={handleSwitchChange}
                            className=''
                        />
                    </Col>
                    <Col xs={5} className='d-flex flex-row align-items-center justify-content-start gap-2'>
                        <h4 className='h6'>Yearly Billing</h4>
                        <Badge className='rounded-pill cs-badge mb-1'>25% discount</Badge>
                    </Col>
                </Row>
                <Row className='border-top mx-0 mt-3'>
                    <Col xs={6} className='ps-5 d-flex flex-column align-items-start justify-content-center gap-2 pt-4'>
                        <h5 className='h6 cs-fc-grey-blue'>
                            <Image fluid src={CheckImg} alt='check' className='me-3 mb-1' /> 
                            Unlimited websites
                        </h5>
                        <h5 className='h6 cs-fc-grey-blue'>
                            <Image fluid src={CheckImg} alt='check' className='me-3 mb-1' /> 
                            100% data ownership
                        </h5>
                        <h5 className='h6 cs-fc-grey-blue'>
                            <Image fluid src={CheckImg} alt='check' className='me-3 mb-1' /> 
                            Email reports
                        </h5>
                    </Col>
                    <Col xs={6} className='px-5 d-flex flex-column align-items-center justify-content-center'>
                        <Button className='rounded-pill w-100 py-2 border-0 cs-btn cs-transition'>Start my trial</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default InteractivePricongPage;