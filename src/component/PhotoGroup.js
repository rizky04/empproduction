import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import mhs1 from '../assets/img/mhs/mhs1.jpeg';
import mhs2 from '../assets/img/mhs/mhs3.jpeg';
import mhs3 from '../assets/img/mhs/mhs5.jpeg';

const PhotoGroup = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white'>PHOTO GROUP</h1>

                <Row>
                    <Col md={4} className='movieWrapper md-3'>
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

export default PhotoGroup
