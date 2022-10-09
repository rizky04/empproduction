import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import product1 from '../assets/img/product/111.jpeg';
import product2 from '../assets/img/product/222.jpeg';
import product3 from '../assets/img/product/333.jpeg';




const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white'>PHOTO PRODUCT</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={product1} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={product2} alt="Card image" />
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper md-3'>
                        <Card className="text-white movieImage">
                            <Card.Img src={product3} alt="Card image" />
                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Trending
