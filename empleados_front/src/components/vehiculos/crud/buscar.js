import React from "react";
import { Container, Row } from "react-bootstrap";
import "../vehiculos.css";
import DataGrid from "../../grid/grid";
import { request } from "../../helper/helper";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "marca",
    text: "Marca",
  },
  {
    dataField: "modelo",
    text: "Modelo",
  },
  {
    dataField: "color",
    text: "Color",
  },
  {
    dataField: "año",
    text: " Año",
  },
  {
    dataField: "motor",
    text: "Motor",
  },
  {
    dataField: "dueño",
    text: "Dueño",
  },
  {
    dataField: "servicio",
    text: "Servicio",
  },
];

export default class VehiculosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickEditButton = this.onClickEditButton.bind(this);
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClickEditButton() {
    this.props.changeTab("editar");
  }

  render() {
    return (
      <Container id="vehiculos-buscar-container">
        <Row>
          <h2> Consultar Vehículos en Servicio </h2>
          <hr />
        </Row>
        <Row>
          <DataGrid
            url="/vehiculos"
            columns={columns}
            showEditButton={true}
            onClickEditButton={this.onClickEditButton}
          />
        </Row>
      </Container>
    );
  }
}
