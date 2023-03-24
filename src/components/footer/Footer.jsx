import {Row, Col, Container} from 'react-bootstrap'
import flower from '../../assets/footer/brand.png'
import facebook from '../../assets/footer/facebook.svg'
import instagram from '../../assets/footer/instagram.svg'
import twitter from '../../assets/footer/twitter.svg'
import youtube from '../../assets/footer/youtube.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div className='footer-brand'>
                                <img src={flower} alt="" />
                                <h1>ChamanTour</h1>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='footer-list'>
                                <ul>
                                    <li><p className='footer-list-menu'>Ko'proq</p></li>
                                    <li><a href="#">Hujjatlar</a></li>
                                    <li><a href="#">Yangiliklar</a></li>
                                    <li><a href="#">Ofis</a></li>
                                    <li><a href="#">Vakansiya</a></li>
                                    <li><a href="#">Xavfsizlik</a></li>
                                    <li><a href="#">So'rovnoma</a></li>
                                </ul>
                                <ul>
                                    <li><p className='footer-list-menu'>Tur-paketlar</p></li>
                                    <li><a href="#">Arzon</a></li>
                                    <li><a href='#'>Mavsumiy</a></li>
                                    <li><a href='#'>Mahalliy</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='footer' lg={6} md={6} sm={12}>
                    <Row>
                    <Col lg={6} md={12} sm={12}>
                            <div className='footer-list'>
                                <ul>
                                    <li><p className='footer-list-menu'>Aloqa</p></li>
                                    <li><a href='#'>Telefon</a></li>
                                    <li><a href="#">Elektron pochta</a></li>
                                </ul>
                                <ul>
                                    <li><p className='footer-list-menu' ><br/></p></li>
                                    <li><p style={{marginBottom: '20px !important'}}>+998 71 234 55 78</p></li>
                                    <li><p>chaman@tour.com</p></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='footer-list footer-accounts'>
                                <ul>
                                    <li><p className='footer-list-menu'>Ijtimoiy tarmoqlar</p></li>
                                    <li>
                                        <a href="#"><img style={{opacity: '1 !important'}} src={facebook} alt="" /></a>
                                        <a href="#"><img style={{opacity: '1 !important'}} src={instagram} alt="" /></a>
                                        <a href="#"><img style={{opacity: '1 !important'}} src={twitter} alt="" /></a>
                                        <a href="#"><img style={{opacity: '1 !important'}} src={youtube} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <p className='footer-end'>© 2023 Chaman Tour | Barcha huquqlar himoyalangan</p>
            <br />
        </Container>
    </div>
  )
}

export default Footer