import { Nav, Container, Navbar } from "react-bootstrap"

//aqui
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <Navbar 
            fixed="top" data-bs-theme="dark" className="bg-black" expand="lg"
            style={{boxShadow: "0 2px 8px 5px rgba(0, 0, 0, 0.2)"}} 
            >
        <Container fluid className="mx-5">
            <Navbar.Brand 
                style={{ fontWeight: "600", fontSize: "1.4rem" }}
                as={Link} to="hero" smooth={true} duration={100}
                className="hover"
            >Diogo Rodrigues</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                {/* <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link> */}
                <Nav.Link className="hover" as={Link} to="about" smooth={true} duration={150}>ABOUT</Nav.Link>
                <Nav.Link className="hover" as={Link} to="portfolio" smooth={true} duration={150}>PORTFOLIO</Nav.Link>
                <Nav.Link className="hover" as={Link} to="contact" smooth={true} duration={150}>CONTACT</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}