import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import wd1 from '../assets/img/wd/wd1.jpeg';
import wd2 from '../assets/img/wd/wd2.jpeg';
import wd3 from '../assets/img/wd/wd3.jpeg';

const PhotoWedding = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white'>PHOTO WEDDING</h1>

                <Row>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={wd1} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={wd2} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={wd3} alt="Card image" />
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default PhotoWedding