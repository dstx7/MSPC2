import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./vehiculos.css";
import VehiculosBuscar from "./crud/buscar";
import VehiculosCrear from "./crud/crear";
import VehiculosEditar from "./crud/editar";

export default class Vehiculos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
      _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdVehiculo = this.setIdVehiculo.bind(this);
    this.getIdVehiculo = this.getIdVehiculo.bind(this);
  }

  setIdVehiculo(id) {
    this.setState({ _id: id });
  }

  getIdVehiculo() {
    return this.state._id;
  }

  changeTab(tab) {
    this.setState({ currentTab: tab });
  }

  render() {
    return (
      <Container id="vehiculos-container">
        <Row>
          <Nav
            fill
            variant="pills"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? (
            <VehiculosBuscar
              changeTab={this.changeTab}
              setIdVehiculo={this.setIdVehiculo}
            />
          ) : this.state.currentTab === "crear" ? (
            <VehiculosCrear changeTab={(tab) => this.changeTab(tab)} />
          ) : (
            <VehiculosEditar
              changeTab={this.changeTab}
              getIdVehiculo={this.getIdVehiculo}
            />
          )}
        </Row>
      </Container>
    );
  }
}
