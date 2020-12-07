import { useEffect } from "react";
import { withFirebase } from "../../Firebase";
import { Container } from "react-bootstrap"
import "./style.css";

function Home({ firebase }) {
  useEffect(() => {
    firebase.products().once("value", (snapshot) => {
      snapshot.forEach((product) => {
        console.log(product.val());
      });
    });
  });

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <div className="grid-item">Home2</div>
            <div className="grid-item">Home1</div>
            <div className="grid-item">Home</div>
        </div>
      </Container>
    </>
  );
}

export default withFirebase(Home);
