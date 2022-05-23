import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className='pl-2'>
      <Container fluid>
        <Navbar.Brand href="/#/systemMaster">SMART</Navbar.Brand>
        <Nav   className="me-auto my-2 my-lg-0">          
          <Nav.Link href="/#/systemMaster">System Master</Nav.Link>
          <Nav.Link href="/#/superAdmin">Super Admin</Nav.Link>
          <Nav.Link href="/#/taskDefinition">Task Definition</Nav.Link>
          <Nav.Link href="/#/resourceDefinition">Resource Definition</Nav.Link>
          <Nav.Link href="/#/resourceSkillsMatrix">Resource Skills Matrix</Nav.Link>
          <Nav.Link href="/#/leave">Leave</Nav.Link>
          <Nav.Link href="/#/allocation">Allocation</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
