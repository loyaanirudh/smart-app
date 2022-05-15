import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import { restHelper } from './_helper';


const Leave = () => {

    const endpointurl = 'Leave'
    const api = restHelper()
    const [data, setData] = useState([])
    const [resourceData, setResourceData] = useState([])

    const getdata = () => {
        api.get(endpointurl)
            .then(setData)
            .catch(err => console.log(err))
    }

    const getResourceData = () => {
        api.get('ResourceDefnition')
            .then(setResourceData)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
        getResourceData()
    }, [])

    var clean = resourceData.filter((arr, index, self) =>
        index === self.findIndex((t: any) => (t['ResourceName'] === arr['ResourceName'])))


    const ResourceData = clean.map((info: any) => {
        return (
            <option value={info.Id}>{info.ResourceName}</option>
        )
    }
    )

    const [values, setValues] = useState({
        ResourceName: "",
        DateFrom: "",
        DateTo: "",
        Source: "",
        Category: ""
    })


    const DisplayData = data.map(
        (info: any) => {
            return (
                <tr>
                    <td>{info.ResourceName}</td>
                    <td>{info.DateFrom}</td>
                    <td>{info.DateTo}</td>
                    <td>{info.Source}</td>
                    <td>{info.Category}</td>
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
                                <th>Date From</th>
                                <th>Date To</th>
                                <th>Source</th>
                                <th>Category</th>
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
                            controlId="ResourceName"
                            label="ResourceName"
                            className="mb-3">
                            <Form.Select name="ResourceName" id='ResourceName' aria-label="Enter Resource Name" onChange={onSelect}>
                                <option>Select Resource Name</option>
                                {ResourceData}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="DateFrom"
                            label="DateFrom"
                            className="mb-3">
                            <Form.Control type="text" name="DateFrom" onChange={onChange} placeholder="Enter Date From" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="DateTo"
                            label="DateTo"
                            className="mb-3">
                            <Form.Control type="text" name="DateTo" onChange={onChange} placeholder="Enter Date To" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="Source"
                            label="Source"
                            className="mb-3">
                            <Form.Control type="text" name="Source" onChange={onChange} placeholder="Enter Source" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="Category"
                            label="Category"
                            className="mb-3">
                            <Form.Control type="text" name="Category" onChange={onChange} placeholder="Enter Category" />
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

export default Leave;
