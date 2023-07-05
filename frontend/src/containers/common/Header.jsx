import React from "react";
import logoImg from "../../static/images/logoIcon.png";

import "../../styles/common/Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <>
      <Navbar expand={false} className="mb-3 bg-navy">
        <Container fluid>
          <Navbar.Brand href="/patient-list">
            <img src={logoImg} alt="아이콘" style={{ height: "30px" }} />
            <span style={{ fontWeight: "700", color: "white" }}>
              의사 병동 회진 시스템
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                진주제일병원(병동회진시스템)
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/patient-list">환자 목록</Nav.Link>
                <NavDropdown
                  title="31병동"
                  id={`offcanvasNavbarDropdown-expand-${31}`}
                >
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
