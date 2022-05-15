import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import { restHelper } from './_helper';

const TaskDefinition = () => {

    const endpointurl = 'TaskDefinition'
    const api = restHelper()
    const [data, setData] = useState([])
    const [systemData, setSystemData] = useState([])


    const getdata = () => {
        api.get(endpointurl)
            .then(setData)
            .catch(err => console.log(err))
    }

    const getSystemData = () => {
        api.get('SystemMaster')
            .then(setSystemData)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
        getSystemData()
    }, [])

    const SystemData = systemData.map((info: any) => {
        return (
            <option value={info.Id}>{info.System}</option>
        )
    }
    )

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
        console.log(values)
        api.postCreate(endpointurl, { body: values })
            .then(getdata)
            .catch(err => console.log(err))
        setShow(false);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        var index = event.target.selectedIndex;
        var textValue: any = event.target[index].innerText
        setValues({ ...values, [event.target.name]: textValue });
    }

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

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Add Master</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="system"
                                    label="System"
                                    className="mb-3">
                                    <Form.Select name="System" id='System' aria-label="Enter System" onChange={onSelect}>
                                        <option>Select System</option>
                                        {SystemData}
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="product"
                                    label="Product"
                                    className="mb-3">
                                    <Form.Control type="text" name="Product" onChange={onChange} placeholder="Enter Product" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="Subproduct"
                                    label="Subproduct"
                                    className="mb-3">
                                    <Form.Control type="text" name="Subproduct" onChange={onChange} placeholder="Enter Sub Product" />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="TaskType"
                                    label="TaskType"
                                    className="mb-3">
                                    <Form.Control type="text" name="TaskType" onChange={onChange} placeholder="Enter Task Type" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="TimeZone"
                                    label="TimeZone"
                                    className="mb-3">
                                    <Form.Control type="text" name="TimeZone" onChange={onChange} placeholder="Enter Time Zone" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="CutOffTime"
                                    label="CutOffTime"
                                    className="mb-3">
                                    <Form.Control type="number" name="CutOffTime" onChange={onChange} placeholder="Enter Cut-Off Time" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="TaskCreation"
                                    label="TaskCreation"
                                    className="mb-3">
                                    <Form.Control type="text" name="TaskCreation" onChange={onChange} placeholder="Enter Task Creation" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="Frequency"
                                    label="Frequency"
                                    className="mb-3">
                                    <Form.Control type="text" name="Frequency" onChange={onChange} placeholder="Enter Frequency" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="CreationTime"
                                    label="CreationTime"
                                    className="mb-3">
                                    <Form.Control type="number" name="CreationTime" onChange={onChange} placeholder="Enter Creation Time" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="TaskStatusUpdateFlag"
                                    label="TaskStatusUpdateFlag"
                                    className="mb-3">
                                    <Form.Control type="text" name="TaskStatusUpdateFlag" onChange={onChange} placeholder="Enter Task Status Update Flag" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="PreAllocationOverride"
                                    label="PreAllocationOverride"
                                    className="mb-3">
                                    <Form.Control type="text" name="PreAllocationOverride" onChange={onChange} placeholder="Enter Pre-Allocation Override" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="PostAllocationOverride"
                                    label="PostAllocationOverride"
                                    className="mb-3">
                                    <Form.Control type="text" name="PostAllocationOverride" onChange={onChange} placeholder="Enter Post-Allocation Override" />
                                </FloatingLabel>
                            </Col>
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

export default TaskDefinition;

