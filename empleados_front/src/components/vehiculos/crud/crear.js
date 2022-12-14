import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";

export default class VehiculosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message:{
        text: '',
        show: false,
      },
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
    this.onExitedMessage = this.onExitedMessage.bind(this);
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

  this.setState({ loading: true});
  request
  .post('/vehiculos',this.state.vehiculo)
  .then((response) => {
    if (response.data.exito){
      this.setState({
        rediret: response.data.exito,
       message: {
        text: response.data.msg,
        show: true,
      },
    });

    }
    this.setState({ loading: false});
    console.log(response.data);
  })
  .catch((err) => {
    console.error(err);
    this.setState({ loading: true});
  });
}
onExitedMessage () {
  if (this.state.rediret) this.props.changeTab( 'buscar' );
}

  render() {
    return (
      <Container id="vehiculos-crear-container">
         <MessagePrompts  
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
          />
          
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