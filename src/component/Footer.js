import { Col, NavLink, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BsInstagram, BsWhatsapp, BsMailbox, BsFillPinMapFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="textFooter">
                        <p>Contact</p>
                        <NavLink href="https://www.instagram.com/yudhis_empip/">
                            <span> <BsInstagram /></span>
                        </NavLink>
                        <NavLink href='https://wa.me/6282332924825'>
                            <BsWhatsapp />
                        </NavLink>

                    </Col>
                    <Col className="textFooter">
                        <p>ydhs.pratama666@gmail.com</p>
                        <NavLink>
                            <BsMailbox />
                        </NavLink>
                    </Col>
                    <Col className="textFooter">
                        <p> Jl trunojoyo V/11 pejagan bangkalan  madura</p>
                        <NavLink>
                            <BsFillPinMapFill />
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer