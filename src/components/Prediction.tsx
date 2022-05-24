import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Prediction = () => {

    return (
        <Container fluid className='p-3'>
            <Row className='mt-2'>
                <Col md='3' />
                <Col md='6' className='border border-dark'>
                    <h3 className='d-flex align-items-center justify-content-center text-center'>Prediction Module</h3>
                    <Image src={process.env.PUBLIC_URL + 'PredictionModule.jpeg'} fluid />
                </Col>
                <Col md='3' />
            </Row>
        </Container >
    )
};

export default Prediction;
