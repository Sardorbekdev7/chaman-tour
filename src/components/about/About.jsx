import img1 from '../../assets/about/img1.svg'
import img2 from '../../assets/about/img2.svg'
import {Row, Col} from 'react-bootstrap'
import './about.css'

function About() {
  return (
    <div className='about'>
        <Row>
            <Col lg={6} md={6} sm={12}>
                <div className='about-img'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <div className='about-text'>
                    <span className='title'>Biz haqimizda</span>
                    <h1>Go’zal manzillar, sifatli va arzon sayohatlar ChamanTour bilan</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='chaman-btn'>Tur-paketlar haqida batafsil</button>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default About