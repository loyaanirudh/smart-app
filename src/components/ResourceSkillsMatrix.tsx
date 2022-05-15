import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import { restHelper } from './_helper';

const ResourceSkillsMatrix = () => {

    const endpointurl = 'ResourceSkillsMatrix'
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
        ResourceName: "",
        System: "",
        Product: "",
        Subproduct: null,
        TaskType: null,
        TaskThroughput: null,
        Experience: null,
        TaskPriority: null,
        TaskStatus: "",
        LastUpdatedProductivity: "",
        SourceOfLastUpdatedProdutivity: ""
    })

    const DisplayData = data.map(
        (info: any) => {
            return (
                <tr>
                    <td>{info.ResourceName}</td>
                    <td>{info.System}</td>
                    <td>{info.Product}</td>
                    <td>{info.Subproduct}</td>
                    <td>{info.TaskType}</td>
                    <td>{info.TaskThroughput}</td>
                    <td>{info.Experience}</td>
                    <td>{info.TaskPriority}</td>
                    <td>{info.TaskStatus}</td>
                    <td>{info.LastUpdatedProductivity}</td>
                    <td>{info.SourceOfLastUpdatedProdutivity}</td>
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
                                <th>Resource Name</th>
                                <th>System</th>
                                <th>Product</th>
                                <th>Subproduct</th>
                                <th>Task Type</th>
                                <th>Task Throughput</th>
                                <th>Experience</th>
                                <th>Task Priority</th>
                                <th>Task Status</th>
                                <th>Last Updated Productivity</th>
                                <th>Source Of Last Updated Produtivity</th>
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
                        </Row>

                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="Subproduct"
                                    label="Subproduct"
                                    className="mb-3">
                                    <Form.Control type="text" name="Subproduct" onChange={onChange} placeholder="Enter Subproduct" />
                                </FloatingLabel>
                            </Col>
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
                                    controlId="TaskThroughput"
                                    label="TaskThroughput"
                                    className="mb-3">
                                    <Form.Control type="number" name="TaskThroughput" onChange={onChange} placeholder="Enter Task Throughput" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="Experience"
                                    label="Experience"
                                    className="mb-3">
                                    <Form.Control type="text" name="Experience" onChange={onChange} placeholder="Enter Experience" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="TaskPriority"
                                    label="TaskPriority"
                                    className="mb-3">
                                    <Form.Control type="text" name="TaskPriority" onChange={onChange} placeholder="Enter Task Priority" />
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
                                    controlId="TaskStatus"
                                    label="TaskStatus"
                                    className="mb-3">
                                    <Form.Control type="text" name="TaskStatus" onChange={onChange} placeholder="Enter Task Status" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="LastUpdatedProductivity"
                                    label="LastUpdatedProductivity"
                                    className="mb-3">
                                    <Form.Control type="text" name="LastUpdatedProductivity" onChange={onChange} placeholder="Enter Last Updated Productivity" />
                                </FloatingLabel>
                            </Col>
                            <Col md="4">
                                <FloatingLabel
                                    controlId="SourceOfLastUpdatedProdutivity"
                                    label="SourceOfLastUpdatedProdutivity"
                                    className="mb-3">
                                    <Form.Control type="text" name="SourceOfLastUpdatedProdutivity" onChange={onChange} placeholder="Enter Source Of Last Updated Produtivity" />
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

export default ResourceSkillsMatrix;

