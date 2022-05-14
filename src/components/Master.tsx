'use strict';
import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap';
import data from '../SMART_ER_Diagram.json';

const Master = () => {

  const [values, setValues] = useState({
    System: '',
    Description: ''
  })

  const DisplayData = data['System Master'].map(
    (info: any) => {
      return (
        <tr>
          <td>{info.System}</td>
          <td>{info.Description}</td>
        </tr>
      )
    }
  )

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    data['System Master'].push(values);
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
                <th>DESCRIPTION</th>
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
              controlId="description"
              label="Description"
              className="mb-3">
              <Form.Control type="text" name="Description" onChange={onChange} placeholder="Enter Description" />
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

export default Master;
