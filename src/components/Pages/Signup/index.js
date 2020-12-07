import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, FormGroup } from "react-bootstrap";
import { useAuth } from "../../Session/AuthContext";
import { withFirebase } from "../../Firebase";
import { Link, useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap'

function Signup({ firebase }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Please confirm that the passwords match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        firstNameRef.current.value,
        lastNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      firebase.products().push({
        name: "Nike",
        price: "5.00",
      });
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign up</h2>
            {error && (
              <Alert variant="danger" style={{ textAlign: "center" }}>
                {error}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" ref={firstNameRef} required />
              </Form.Group>
              <Form.Group id="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" ref={lastNameRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </Container>
  );
}

export default withFirebase(Signup);
