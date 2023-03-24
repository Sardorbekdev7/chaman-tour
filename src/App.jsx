import React from 'react'
import Header from './components/header/header'
import About from './components/about/About'
import Container from 'react-bootstrap/Container';
import Card from './components/card/Card';
import Paket from './components/paket/Paket';
import Idea from './components/idea/Idea';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <About />
        <Card />
        <Paket />
        <Idea />
      </Container>
      <Connect />
      <Footer />
    </div>
  )
}
