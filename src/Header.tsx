import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container  className='float-start'>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content">
          <Nav.Link href="/systemMaster">System Master</Nav.Link>
          <Nav.Link href="/superAdmin">Super Admin</Nav.Link>
          <Nav.Link href="/taskDefinition">Task Definition</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
