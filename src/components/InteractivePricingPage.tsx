import React, { FC } from 'react';
//Components
import './InteractivePricongStyle.css';
import PricingPanel from './PricingPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

const InteractivePricongPage: FC = () => {
    const logoAnim = useSpring ({
        from: { opacity: 0, y: -200 },
        to: { opacity: 1, y: 0 },
        config: { tention: 150, friction: 15 }
    });

    const itemAnim = useSpring ({
        from: { opacity: 0, y: 200 },
        to: { opacity: 1, y: 0 },
        config: { tention: 150, friction: 15 }
    });

    return (
        <Container fluid className='vh-100 cs-bg-image d-flex flex-column align-items-center justify-content-center gap-3 overflow-hidden'>
            <animated.div style={logoAnim} className='cs-bg-logo text-center pt-5 pb-4'>                
                <h1 className='h2 pb-2 cs-fw-800 cs-fc-dark-blue'>Simple, traffic-based pricing</h1>
                <p className='cs-fc-grey-blue'>Sign-up for our 30-day trial. No credit card required.</p>
            </animated.div>
            <animated.div style={itemAnim} className='w-100'>
                <PricingPanel />
            </animated.div>
        </Container>
    );
}

export default InteractivePricongPage;