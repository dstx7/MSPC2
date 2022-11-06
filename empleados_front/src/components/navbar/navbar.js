import React from "react";
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Row
} from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <Navbar fixed="top" bg="secondary" variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home">MotorSport Performance Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Tienda</Nav.Link>
              <Nav.Link href="#home">Servicios</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title=" Usuario">
              <Dropdown.Header>
                <Row>
                <FontAwesomeIcon icon={faUserSecret} />
                </Row>
                <Row>
                    #USUARIO#
                </Row>
              </Dropdown.Header>
              <Dropdown.Divider />

              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}