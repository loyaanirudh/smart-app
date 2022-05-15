import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import { restHelper } from './_helper';

const TaskDefinition = () => {

    const endpointurl = 'TaskDefinition'
    const api = restHelper()
    const [data, setData] = useState([])


    const getdata = () => {
        api.get(endpointurl)
            .then(setData)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
    }, [])

    const [values, setValues] = useState({
        System: '',
        Product: null,
        Subproduct: null,
        TaskType: '',
        TimeZone: '',
        CutOffTime: Number.NaN,
        TaskCreation: '',
        Frequency: '',
        CreationTime: Number.NaN,
        TaskStatusUpdateFlag: '',
        PreAllocationOverride: '',
        PostAllocationOverride: ''
    })

    const DisplayData = data.map(
        (info: any) => {
            return (
                <tr>
                    <td>{info.System}</td>
                    <td>{info.Product}</td>
                    <td>{info.Subproduct}</td>
                    <td>{info.TaskType}</td>
                    <td>{info.TimeZone}</td>
                    <td>{info.CutOffTime}</td>
                    <td>{info.TaskCreation}</td>
                    <td>{info.Frequency}</td>
                    <td>{info.CreationTime}</td>
                    <td>{info.TaskStatusUpdateFlag}</td>
                    <td>{info.PreAllocationOverride}</td>
                    <td>{info.PostAllocationOverride}</td>
                </tr>
            )
        }
    )

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        api.postCreate(endpointurl, { body: values })
            .then(getdata)
            .catch(err => console.log(err))
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
                                <th>System</th>
                                <th>Product</th>
                                <th>Subproduct</th>
                                <th>TaskType</th>
                                <th>TimeZone</th>
                                <th>CutOffTime</th>
                                <th>TaskCreation</th>
                                <th>Frequency</th>
                                <th>CreationTime</th>
                                <th>TaskStatusUpdateFlag</th>
                                <th>PreAllocationOverride</th>
                                <th>PostAllocationOverride</th>
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

export default TaskDefinition;

