import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import emailjs from "@emailjs/browser";

export default function Contact({isMobile}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            message: formData.message,
            email: formData.email,

        }

        emailjs.send("service_v55xwvf", "template_0vvoztd", templateParams, "siGv1uUS2DgzcFp6x")
        .then((result) => {
            window.alert("Email sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            }, (error) => {
                window.alert("We are sorry but we were unable to send your email.\nWe will try to resolve the issue as soon as possible.");
            })
        })
    }

    return (
        <Container className="my-5 p-5" id="contact">
          <Row>
            <Col>
              <h2 className="py-4 mb-3">Get in touch</h2>
              <p>Feel free to ask any questions,</p>
              <p>or give a suggestion</p>
            </Col>
    
            <Col lg="7" className="d-flex align-items-center">
              <form className="w-100" onSubmit={handleSubmit}>
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className={`form-control ${isMobile && "mb-3"}`}
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>
    
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
    
                <textarea
                  className="form-control mt-3 mb-4"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
    
                <Row>
                  <Col lg="12" className="form-group d-flex justify-content-end">
                    <Button type="submit">Send</Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
    );    
}
