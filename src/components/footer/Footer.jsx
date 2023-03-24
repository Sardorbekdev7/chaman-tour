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
                <Col lg={6} md={12} sm={12}>
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
                                    <li className='footer-list-menu'>Ko'proq</li>
                                    <li>Hujjatlar</li>
                                    <li>Yangiliklar</li>
                                    <li>Ofis</li>
                                    <li>Vakansiya</li>
                                    <li>Xavfsizlik</li>
                                    <li>So'rovnoma</li>
                                </ul>
                                <ul>
                                    <li className='footer-list-menu'>Tur-paketlar</li>
                                    <li>Arzon</li>
                                    <li>Mavsumiy</li>
                                    <li>Mahalliy</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                    <Col lg={6} md={12} sm={12}>
                            <div className='footer-list'>
                                <ul>
                                    <li className='footer-list-menu'>Aloqa</li>
                                    <li>Telefon</li>
                                    <li>Elektron pochta</li>
                                </ul>
                                <ul>
                                    <li><br /></li>
                                    <li className='footer-list-menu'>+998 71 234 55 78</li>
                                    <li className='footer-list-menu'>chaman@tour.com</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className='footer-list footer-accounts'>
                                <ul>
                                    <li className='footer-list-menu'>Ijtimoiy tarmoqlar</li>
                                    <li className='footer-list-menu'>
                                        <a href="#"><img src={facebook} alt="" /></a>
                                        <a href="#"><img src={instagram} alt="" /></a>
                                        <a href="#"><img src={twitter} alt="" /></a>
                                        <a href="#"><img src={youtube} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer