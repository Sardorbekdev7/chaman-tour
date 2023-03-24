import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../assets/navbar/brand.png'
import './navbar.css'
import { Button } from 'bootstrap';

function NavbarChaman() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Brand} style={{width: '39px'}} alt="ChamanTour" />ChamanTour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Asosiy</Nav.Link>
            <Nav.Link href="#link">Biz Haqimizda</Nav.Link>
            <Nav.Link href="#link">Tur-paketlar</Nav.Link>
            <Nav.Link href="#link"><button className='chaman-btn' type='tel: +998'>Biz bilan bog'lanish</button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarChaman;