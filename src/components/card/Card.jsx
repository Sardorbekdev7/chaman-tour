import img1 from '../../assets/cards/card1.svg'
import img2 from '../../assets/cards/card2.svg'
import img3 from '../../assets/cards/card3.svg'
import img4 from '../../assets/cards/card4.svg'

import {Row, Col} from 'react-bootstrap'
import './card.css'

function Card() {
  return (
    <div className='cards'>
        <Row>
            <Col lg={3} md={6} sm={12} >
                <div className='card'>
                    <img src={img1} alt="" />
                    <h1>Yo’lboshchi hizmati</h1>
                    <p>Tajribali gidlar butun sayohat davomida xizmatingizda</p>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} >
                <div className='card'>
                    <img src={img2} alt="" />
                    <h1>Transport</h1>
                    <p>Aeroport-mehmonxona o’rtasida bepul transport</p>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} >
                <div className='card'>
                    <img src={img3} alt="" />
                    <h1>Tez va oson</h1>
                    <p>Tur-paketlarni 15 daqiqa ichida rasmiylashtiramiz</p>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} >
                <div className='card'>
                    <img src={img4} alt="" />
                    <h1>Sifat nazorati</h1>
                    <p>Biz tanlagan xizmatlar yuqori sifat namoyondasidir</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Card