import { Col, Container, Image, Row } from "react-bootstrap";

export default function About({isMobile}) {
    return (
        <section id="about" className="py-5">
        <Container className="py-5">
            {!isMobile ? (
                <Row>
                <Col>
                    <h2 className="mb-3">Hi!</h2>
                    <p style={{marginBottom: "0.4rem", fontSize: "1.3rem"}}>I'm Diogo Rodrigues from Portugal!</p>
                    <p style={{marginBottom: "0.1rem", fontSize: "1.3rem"}}>I am currently studying Computer Science at Instituto Superior Técnico (IST) in Lisbon.</p>
                    <p style={{marginBottom: "0.4rem", fontSize: "1.3rem"}}>I devote my free time to learning more about programing and building side projects.</p>
                    <p style={{fontSize: "1.3rem"}}>Below, you can explore some of my projects...</p>
                </Col>

                <Col xl={2} lg={3} sm={4} className="my-auto px-0 d-flex justify-content-end">
                    <Image src="src/assets/ist-logo.png" rounded style={{width: "10rem"}} />
                </Col>
                </Row>
            ) : (
                <>
                <Row className="d-flex justify-content-center mb-5">
                    <Image src="src/assets/ist-logo.png" rounded style={{width: "15rem"}} />
                </Row>
                <Row className="text-center">
                    <h2 className="mb-3">Hello!</h2>
                    <p style={{marginBottom: "0.1rem", fontSize: "1.3rem"}}>I'm Diogo Rodrigues from Portugal</p>
                    <p style={{marginBottom: "1rem", fontSize: "1.3rem"}}>I study Computer Science at IST.</p>
                    <p style={{marginBottom: "0rem", fontSize: "1.3rem"}}>Here are some of my projects</p>
                </Row>
                </>
            )}
            
            
        </Container>
        </section>
    )
}