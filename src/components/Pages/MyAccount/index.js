import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "./../../Session/AuthContext";

export default function MyAccount() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </Container>
  );
}
