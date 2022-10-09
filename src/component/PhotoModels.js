import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import md1 from '../assets/img/mdl/mdl1.jpeg';
import md2 from '../assets/img/mdl/mdl2.jpeg';
import md3 from '../assets/img/mdl/mdl3.jpeg';




const PhotoModels = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white'>PHOTO MODEL</h1>

                <Row>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={md1} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={md2} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={md3} alt="Card image" />
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default PhotoModels
