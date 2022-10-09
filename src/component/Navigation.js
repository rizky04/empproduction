import { Navbar, Container, Nav, NavLink } from "react-bootstrap";


const Navigation = () => {
    return (
        <div>
            <Navbar variant="light">
                <Container>
                    <Nav className="justify-content-center">
                        <NavLink className="text-white">
                            Product
                        </NavLink >
                        <NavLink className="text-white">
                            Model
                        </NavLink>
                        <NavLink className="text-white">
                            Group
                        </NavLink>
                        <NavLink className="text-white">
                            Wedding
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default Navigation
