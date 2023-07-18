import { Col, Container, Image, Row } from "react-bootstrap";

export default function About() {
    return (
        <section id="about" className="py-5">
        <Container className="py-5">
            <Row>
                <Col>
                    <h2 className="mb-3">Hi!</h2>
                    <p style={{marginBottom: "0.4rem", fontSize: "1.3rem"}}>I'm Diogo Rodrigues from Portugal!</p>
                    <p style={{marginBottom: "0.1rem", fontSize: "1.3rem"}}>I am currently studying Computer Science at Instituto Superior Técnico (IST) in Lisbon.</p>
                    <p style={{marginBottom: "0.4rem", fontSize: "1.3rem"}}>I devote my free time to learning more about programing and building side projects.</p>
                    <p style={{fontSize: "1.3rem"}}>Below, you can explore some of my projects...</p>
                </Col>

                <Col xs={2} className="my-auto px-0 d-flex justify-content-end">
                    <Image src="src/assets/ist-logo.png" rounded style={{width: "10rem"}} />
                </Col>
            </Row>
            
        </Container>
        </section>
    )
}