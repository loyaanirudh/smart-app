import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import { restHelper } from './_helper';
import data1 from '../SMART_ER_Diagram.json'

const ResourceDefinition = () => {

    const endpointurl = 'ResourceDefnition'
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
        ResourceName: "",
        ResourceRole: "",
        WorkingHoursFrom: "",
        WorkingHoursTo: "",
        Timezone: "",
        WorksMonday: "",
        WorksTuesday: "",
        WorksWednesday: "",
        WorksThursday: "",
        WorksFriday: "",
        MaxAllowableUtilization: "",
        DateFrom: "",
        DateTo: null
    })


    const DisplayData = data.map(
        (info: any) => {
            return (
                <tr>
                    <td>{info.ResourceName}</td>
                    <td>{info.ResourceRole}</td>
                    <td>{info.WorkingHoursFrom}</td>
                    <td>{info.WorkingHoursTo}</td>
                    <td>{info.Timezone}</td>
                    <td>{info.WorksMonday}</td>
                    <td>{info.WorksTuesday}</td>
                    <td>{info.WorksWednesday}</td>
                    <td>{info.WorksThursday}</td>
                    <td>{info.WorksFriday}</td>
                    <td>{info.MaxAllowableUtilization}</td>
                    <td>{info.DateFrom}</td>
                    <td>{info.DateTo}</td>
                </tr>
            )
        }
    )

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        console.log(values)
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
                                <th>Resource Name</th>
                                <th>Resource Role</th>
                                <th>Working Hours From</th>
                                <th>Working Hours To</th>
                                <th>Timezone</th>
                                <th>Works Monday</th>
                                <th>Works Tuesday</th>
                                <th>Works Wednesday</th>
                                <th>Works Thursday</th>
                                <th>Works Friday</th>
                                <th>Max Allowable Utilization</th>
                                <th>Date From</th>
                                <th>Date To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayData}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Add Master</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="ResourceName"
                                    label="ResourceName"
                                    className="mb-3">
                                    <Form.Control type="text" name="ResourceName" onChange={onChange} placeholder="Enter Resource Name" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="ResourceRole"
                                    label="ResourceRole"
                                    className="mb-3">
                                    <Form.Control type="text" name="ResourceRole" onChange={onChange} placeholder="Enter Resource Role" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorkingHoursFrom"
                                    label="WorkingHoursFrom"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorkingHoursFrom" onChange={onChange} placeholder="Enter Working Hours From" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorkingHoursTo"
                                    label="WorkingHoursTo"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorkingHoursTo" onChange={onChange} placeholder="Enter Working Hours To" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="Timezone"
                                    label="Timezone"
                                    className="mb-3">
                                    <Form.Control type="text" name="Timezone" onChange={onChange} placeholder="Enter Timezone" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorksMonday"
                                    label="WorksMonday"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorksMonday" onChange={onChange} placeholder="Enter Works Monday" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorksTuesday"
                                    label="WorksTuesday"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorksTuesday" onChange={onChange} placeholder="Enter Works Tuesday" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorksWednesday"
                                    label="WorksWednesday"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorksWednesday" onChange={onChange} placeholder="Enter Works Wednesday" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorksThursday"
                                    label="WorksThursday"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorksThursday" onChange={onChange} placeholder="Enter Works     Thursday" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="WorksFriday"
                                    label="WorksFriday"
                                    className="mb-3">
                                    <Form.Control type="text" name="WorksFriday" onChange={onChange} placeholder="Enter Works Friday" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="MaxAllowableUtilization"
                                    label="MaxAllowableUtilization"
                                    className="mb-3">
                                    <Form.Control type="text" name="MaxAllowableUtilization" onChange={onChange} placeholder="Enter Max Allowable Utilization" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="DateFrom"
                                    label="DateFrom"
                                    className="mb-3">
                                    <Form.Control type="text" name="DateFrom" onChange={onChange} placeholder="Enter Date From" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="DateTo"
                                    label="DateTo"
                                    className="mb-3">
                                    <Form.Control type="text" name="DateTo" onChange={onChange} placeholder="Enter Date To" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4"></Col>
                            <Col md="4"></Col>
                        </Row>
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

export default ResourceDefinition;
