import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';

function Signup() {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    isAdmin: false
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  async function submitForm(event) {
    event.preventDefault();
    console.log("Submitting Form with data:", data);  // Debugging line

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <>
      <SignupPage>
        <Container fluid>
          <Row>
            <Col className='mt-3'>
              <h1 className='display-4'>Sign Up</h1>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col sm={12} md={6}>
              <div className='image'>
                <Image src='/contactus.jpg' className='my-5 img' fluid />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="form">
                <Form onSubmit={submitForm}>
                  <Form.Group className='mt-3' controlId="formUserName">
                    <Form.Label className="label">User Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter User Name"
                      onChange={handleChange}
                      value={data.username}
                      required
                    />
                  </Form.Group>
                  <Form.Group className='mt-3' controlId="formEmail">
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
                  <Form.Group className='mt-3' controlId="formPhone">
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
                  <Form.Group className='mt-3' controlId="formPassword">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={handleChange}
                      value={data.password}
                      required
                    />
                  </Form.Group>
                <input type="checkbox" name=""  className='mt-3 p-5' id="" />&nbsp;<b>Admin</b><br />
                  <Button variant="primary" className='mt-3' type="submit">
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </SignupPage>
    </>
  );
}

const SignupPage = styled.div`
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

export default Signup;
