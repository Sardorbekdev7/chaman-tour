import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../assets/navbar/brand.png'
import './navbar.css'
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { Drawer, Space } from 'antd';

function NavbarChaman() {
  
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
 
  
  var y = window.innerWidth
  console.log(y);


  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img src={Brand} style={{width: '39px'}} alt="ChamanTour" />ChamanTour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={showDrawer} />
        <Navbar.Collapse id="basic-navbar-nav">
          {y > 1024 ? 
          <Nav className="me-auto">
            <Nav.Link href="#home">Asosiy</Nav.Link>
            <Nav.Link href="#link">Biz Haqimizda</Nav.Link>
            <Nav.Link href="#link">Tur-paketlar</Nav.Link>
            <Nav.Link href="#link"><button className='chaman-btn' style={{marginTop: '0px !important'}} type='tel: +998'>Biz bilan bog'lanish</button></Nav.Link>
          </Nav>:
            <Drawer
            placement={placement}
            style={{width: '100% !importand', }}
            onClose={onClose}
            open={open}
            
          >
            <Nav.Link href="#home">Asosiy</Nav.Link>
            <Nav.Link href="#link">Biz Haqimizda</Nav.Link>
            <Nav.Link href="#link">Tur-paketlar</Nav.Link>
            <Nav.Link href="#link"><button className='chaman-btn' style={{marginTop: '0px !important'}} type='tel: +998'>Biz bilan bog'lanish</button></Nav.Link>
          </Drawer>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarChaman;