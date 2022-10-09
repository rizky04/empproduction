import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import mhs1 from '../assets/img/Couple/1.jpeg';
import mhs2 from '../assets/img/Couple/2.jpeg';
import mhs3 from '../assets/img/Couple/3.jpeg';

const PhotoCouple = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white'>PHOTO COUPLE</h1>

                <Row>
                    <Col md={4} className='movieWrapper md-3' id='photocouple'>
                        <Card className="text-white movieImage">
                            <Card.Img src={mhs1} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={mhs2} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={mhs3} alt="Card image" />
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default PhotoCouple
