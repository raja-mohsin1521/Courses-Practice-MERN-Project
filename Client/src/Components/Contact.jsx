import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [data, setData] = useState({
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("Handle Change:", name, value);  // Debugging line
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    console.log("Submitting Form with data:", data);  // Debugging line

    try {
      const response = await fetch('http://localhost:5000/api/auth/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <ContactPage>
      <Container fluid>
        <Row>
          <Col className='mt-3'>
            <h1 className='display-4'>Contact Us</h1>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={12} md={6}>
            <div className="image">
              <Image src="/contactus.jpg" className="my-5 img" fluid />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="form">
              <Form onSubmit={submitForm}>
                <Form.Group className="mt-3" controlId="formEmail">
                  <Form.Label className="label">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={data.email}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="formPhone">
                  <Form.Label className="label">Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    onChange={handleChange}
                    value={data.phone}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="formMessage">
                  <Form.Label className="label">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Enter message"
                    rows={10}
                    onChange={handleChange}
                    value={data.message}
                    required
                  />
                </Form.Group>
                <Button variant="primary" className="mt-3" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </ContactPage>
  );
}

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .form {
    margin-top: 20px;
    width: 80%;
  }
  .label {
    font-weight: bold;
  }
  .display-4 {
    font-family: 'Times New Roman', Times, serif;
    margin-left: 50px;
  }
  .img {
    height: 50vh;
  }
  .image {
    margin-left: 50px;
  }
`;

export default Contact;
