import { Col, NavLink, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BsInstagram, BsWhatsapp, BsMailbox, BsFillPinMapFill } from "react-icons/bs";
import Logo from '../assets/img/bg/logowhite.png'


const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="textFooter">
                        <p>Contact</p>
                        <NavLink href="https://www.instagram.com/yudhis_empip/">
                            <span> <BsInstagram /></span>
                        </NavLink>
                        <NavLink href='https://wa.me/6282332924825'>
                            <BsWhatsapp />
                        </NavLink>

                    </Col>
                    <Col md={4} className="textFooter">
                        <p>ydhs.pratama666@gmail.com</p>
                        <NavLink>
                            <BsMailbox />
                        </NavLink>
                    </Col>
                    <Col md={4} className="textFooter">
                        <p> Jl trunojoyo V/11 pejagan bangkalan  madura</p>
                        <NavLink>
                            <BsFillPinMapFill />
                        </NavLink>
                    </Col>
                </Row>
                <p className='text-center'>
                    <hr />
                    <img src={Logo} alt="" className="LogoFooter" />
                </p>
            </Container>
        </div>
    )
}
export default Footer