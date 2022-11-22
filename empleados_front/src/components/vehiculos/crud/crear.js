import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";

export default class VehiculosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      vehiculo: {
        marca: "",
        modelo: "",
        color: "",
        año: "",
        motor: "",
        dueño: "",
        servicio: "",
      },
    };
  }

setValue(iniciov,value){
    this.setState({
        vehiculo:{
            ...this.state.vehiculo,
            [iniciov]: value,
        },
    });
}

guardarVehiculos(){
  
  request
  .post('/vehiculos',this.state.vehiculo)
  .then((response) => {
    this.setState({ loading: false});
    if(response.data.exito){
      window.location.reload();
    }
    this.setState({ loading: true});
    console.log(response.data);
  })
  .catch((err) => {
    this.setState({ loading: true});
    console.error(err);
  });
}

  render() {
    return (
      <Container id="vehiculos-crear-container">
        <Loading show = {this.state.loading} />
        <Row>
          <h2> Registrar Vehículo </h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("marca", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("modelo", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Color</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("color", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>año</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("año", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cilindrada Motor</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => this.setValue("motor", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Propietario</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("dueño", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Servicio</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("servicio", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="light"
              onClick={() => console.log(this.guardarVehiculos())}
            >
              Guardar Vehículo
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}