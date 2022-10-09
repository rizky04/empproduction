import { Navbar, Container, Nav, NavLink } from "react-bootstrap";


const Navigation = () => {
    return (
        <div>
            <Navbar variant="light">
                <Container>
                    <Nav className="justify-content-center">
                        <NavLink href="#photoproduct" className="text-white">
                            Product
                        </NavLink >
                        <NavLink href="#photomodel" className="text-white">
                            Model
                        </NavLink>
                        <NavLink href="#photogroup" className="text-white">
                            Group
                        </NavLink>
                        <NavLink href="#photowedding" className="text-white">
                            Wedding
                        </NavLink>
                        <NavLink href="#photocouple" className="text-white">
                            Couple
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default Navigation
