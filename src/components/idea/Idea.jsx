import React from 'react'
import vector from '../../assets/idea/vector.svg'
import img from '../../assets/idea/img.svg'
import {Row, Col} from 'react-bootstrap'
import './idea.css'

const Idea = () => {
  return (
    <div className='idea'>
        <Row>
            <Col lg={6} md={6} sm={12} >
                <div className='idea-text'>
                    <span className='title'>Mijozlarimizning biz haqimizda fikrlari</span>
                    <h1>Hammasi a’lo!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='chaman-btn'>Barcha fikrlarni ko’rish <img src={vector} alt="" /></button>
                </div>
            </Col>
            <Col lg={6} md={6} sm={12} >
                <div className='idea-img'>
                    <img src={img} alt="" />
                </div>
            </Col>
        </Row>
        
    </div>
  )
}

export default Idea