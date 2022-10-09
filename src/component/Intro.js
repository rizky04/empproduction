import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap';
import Logo from '../assets/img/bg/logowhite.png'
const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-items-center">
                <Row>
                    <Col className='text-center'>
                        {/* <div className='title'>EMP PRODUCTION</div> */}
                        <div className='mt-5'>
                            <img src={Logo} alt="" className="Logo" />
                        </div>
                        <div className='introButton mt-5'>
                            <Button variant='light'>Lihat Semua Photo</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
