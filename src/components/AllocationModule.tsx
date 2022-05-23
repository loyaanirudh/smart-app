import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { restHelper } from './_helper';


const AllocationModule = () => {

    const endpointurl = 'TaskLevelView'
    const api = restHelper()
    const [data, setData] = useState([])



    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        api.get(endpointurl)
            .then(setData)
            .catch(err => console.log(err))
    }

    const DisplayData = data.map(
        (info: any) => {
            return (
                <tr>
                    <td>{info.System}</td>
                    <td>{info.Product}</td>
                    <td>{info.Subproduct}</td>
                    <td>{info.TaskType}</td>
                    <td>{info.TaskID}</td>
                    <td>{info.Status}</td>
                    <td>{info.CompletionStatus}</td>
                    <td>{info.ResourceName}</td>
                    <td>{info.Timezone}</td>
                    <td>{info.AllocationTime}</td>
                    <td>{info.CompletionTime}</td>
                </tr>
            )
        }
    )
    const [showData, setShowData] = useState(false)

    const handleShow = () => {
        setShowData(true)
    };

    return (
        <Container fluid>
            <Row className="mt-2">
                <Col sm md="8" />
                <Col sm md="4" >
                    <ButtonGroup className='float-end'>
                        <Button className='mx-2' variant="outline-primary" hidden={!showData}>
                            Release
                        </Button>
                        <Button className='mx-2' variant="outline-primary" hidden={!showData}>
                            Update Allocation
                        </Button>
                        <Button className='mx-2' variant="outline-primary" onClick={handleShow}>
                            Trigger Allocation
                        </Button>
                    </ButtonGroup>
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
                                <th>Task Type</th>
                                <th>Task ID</th>
                                <th>Status</th>
                                <th>Completion Status</th>
                                <th>Resource Name</th>
                                <th>Timezone</th>
                                <th>Allocation Time</th>
                                <th>Completion Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showData && DisplayData}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >
    )
};

export default AllocationModule;
