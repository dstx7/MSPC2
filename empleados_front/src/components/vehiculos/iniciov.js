import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./vehiculos.css";
import VehiculosBuscar from "./crud/buscar";
import VehiculosCrear from "./crud/crear";


export default class Vehiculos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentTab: 'buscar',
    };
  }

  render() {
    return (
      <Container id="vehiculos-container">
        <Row>
          <Nav fill variant="pills" defaultActiveKey="/buscar"
          onSelect={(eventKey) => this.setState({ currentTab: eventKey})} >
            
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>

        </Row>
        <Row>
            {this.state.currentTab === 'buscar'?
            (<VehiculosBuscar />) :this.state.currentTab === 'crear'? 
            (<VehiculosCrear changeTab={
              (tab) => this.changeTab(tab)} />): null}
        </Row>
      </Container>
    );
  }
}
