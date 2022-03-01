import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function navbar() {
  return (
    <div className="sticky top-0"> 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="font-semibold" href="/">
            Azwad's Blog
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link className="absolute right-0 mr-24 xs:mr-2 md:mr-14 lg:mr-24" href="/">
              Author Login
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
