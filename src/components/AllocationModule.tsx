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

    const [showAggregateData, setShowAggregateData] = useState(false)

    const DisplayData = data.map(
        (info: any) => {
            return (
                <tr onClick={() => { setShowAggregateData(true) }}>
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
                </tr >
            )
        }
    )
    const [showData, setShowData] = useState(false)

    const handleShow = () => {
        setShowData(true)
        setShowAggregateData(false)
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
                    <h3 className='d-flex align-items-center justify-content-center text-center'>Task-Level View</h3>
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

            <Row className="mt-4" hidden={!showAggregateData}>
                <Col xs md="12" >
                    <h3 className='d-flex align-items-center justify-content-center text-center'>Resource View</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Resource Name</th>
                                <th>System</th>
                                <th>Product</th>
                                <th>Subproduct</th>
                                <th>Task Type</th>
                                <th>Count</th>
                                <th>Aggregated Utilization %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Srikanth Gopal</td>
                                <td>Gloss</td>
                                <td>FX</td>
                                <td>GBP</td>
                                <td></td>
                                <td>500</td>
                                <td className='align-middle' rowSpan={2}>70</td>
                            </tr>
                            <tr>
                                <td>Srikanth Gopal</td>
                                <td>Crome</td>
                                <td>Collateral</td>
                                <td>NIP</td>
                                <td>Demand Call</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >
    )
};

export default AllocationModule;
