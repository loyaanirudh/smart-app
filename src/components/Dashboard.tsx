import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Dashboard = () => {

    return (
        <Container fluid className='p-3'>
            <Row className='mt-2'>
                <Col className='border border-dark'>
                    <h3 className='d-flex align-items-center justify-content-center text-center'>Prediction Module</h3>
                    <Image src={process.env.PUBLIC_URL + 'PredictionModule.jpeg'} fluid />
                </Col>
                &nbsp;&nbsp;
                <Col className='border border-dark'>
                    <h3 className='d-flex align-items-center justify-content-center text-center'>Resource Productivity</h3>
                    <Image src={process.env.PUBLIC_URL + 'ResourceProductivity.jpeg'} fluid />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className='border border-dark'>
                    <h3 className='d-flex align-items-center justify-content-center text-center'>Volume Trends</h3>
                    <Image src={process.env.PUBLIC_URL + 'VolumeTrends.jpeg'} fluid />
                </Col>
                &nbsp;&nbsp;
                <Col className='border border-dark'>
                    <h3 className='d-flex align-items-center justify-content-center text-center'>SLA</h3>
                    <Image src={process.env.PUBLIC_URL + 'SLA.jpeg'} fluid />
                </Col>
            </Row>
        </Container >
    )
};

export default Dashboard;
