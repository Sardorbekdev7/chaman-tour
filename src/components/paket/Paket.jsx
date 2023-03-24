import './Paket.css'
import {Row, Col} from 'react-bootstrap'
import img1 from '../../assets/paket/img1.svg'
import img2 from '../../assets/paket/img2.svg'
import img3 from '../../assets/paket/img3.svg'

const Paket = () => {
  return (
    <div id='paket' className='paket'>
        <p className='title' style={{textAlign: 'center'}} >Sayohat paketlarni</p>
        <h1  style={{textAlign: 'center'}}>Ajoyib va betakror manzillar</h1>
        <div className='paket-cards'>
            <Row>
                <Col lg={4} md={6} sm={12} >
                    <div className='paket-card'>
                        <img src={img1} alt="" />
                        <div className='paket-card-text'>
                            <h1>Umra va Haj safarlari</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className='paket-card'>
                        <img src={img2} alt="" />
                        <div className='paket-card-text'>
                            <h1>Umra va Haj safarlari</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} >
                    <div className='paket-card'>
                        <img src={img3} alt="" />
                        <div className='paket-card-text'>
                            <h1>Umra va Haj safarlari</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Paket