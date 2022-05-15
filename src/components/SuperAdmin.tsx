'use strict';
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import data from '../SMART_ER_Diagram.json';

const SuperAdmin = () => {

    const [values, setValues] = useState({
        System: '',
        Admin: ''
    })

    const DisplayData = data['Super Admin'].map(
        (info: any) => {
            return (
                <tr>
                    <td>{info.System}</td>
                    <td>{info.Admin}</td>
                </tr>
            )
        }
    )

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        data['Super Admin'].push(values);
        setShow(false);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <Container fluid>
            <Row className="mt-2">
                <Col md="11" />
                <Col md="1">
                    <Button className="float-end" variant="outline-primary" onClick={handleShow}>
                        Add
                    </Button>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs md="12" >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SYSTEM</th>
                                <th>ADMIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayData}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Master</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="system"
                            label="System"
                            className="mb-3">
                            <Form.Control type="text" name="System" onChange={onChange} placeholder="Enter System" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="admin"
                            label="Admin"
                            className="mb-3">
                            <Form.Control type="text" name="Admin" onChange={onChange} placeholder="Enter Admin" />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
};

export default SuperAdmin;
