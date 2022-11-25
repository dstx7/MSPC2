import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import "../vehiculos.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class VehiculosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idVehiculo: this.props.getIdVehiculo(),
      rediret: false,

      message: {
        //muestra el mensaje
        text: "",
        show: false,
      },

      confirmation: {
        title: "Modificar Vehiculo",
        text: "¿Desea modificar el Vehiculo?",
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getVehiculo();
  }

  getVehiculo() {
    this.setState({ loading: true });
    request
      .get(`/vehiculos/${this.state.idVehiculo}`)
      .then((response) => {
        this.setState({
          vehiculo: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  setValue(iniciov, value) {
    this.setState({
      vehiculo: {
        ...this.state.vehiculo,
        [iniciov]: value,
      },
    });
  }

  guardarVehiculos() {
    request
      .put(`/vehiculos/${this.state.idVehiculo}`, this.state.vehiculo)
      .then((response) => {
        this.setState({ loading: true });
        if (response.data.exito) {
          this.props.changeTab("buscar");
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({ loading: true });
        console.error(err);
      });
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("buscar");
  }

  onCancel() {
    this.setState({
      confirmation: { ...this.state.confirmation, show: false },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: { ...this.state.confirmation, show: false },
      },
      this.guardarVehiculos()
    );
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

        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />

        <Loading show={this.state.loading} />
        <Row>
          <h2> Editar Vehículo </h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Marca</Form.Label>
              <Form.Control
              value={this.state.vehiculo.marca}
                onChange={(e) => this.setValue("marca", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
              value={this.state.vehiculo.modelo}
                onChange={(e) => this.setValue("modelo", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Color</Form.Label>
              <Form.Control
              value={this.state.vehiculo.color}
                onChange={(e) => this.setValue("color", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>año</Form.Label>
              <Form.Control
              value={this.state.vehiculo.año}
                onChange={(e) => this.setValue("año", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Cilindrada Motor</Form.Label>
              <Form.Control
              value={this.state.vehiculo.motor}
                onChange={(e) => this.setValue("motor", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Propietario</Form.Label>
              <Form.Control
              value={this.state.vehiculo.dueño}
                onChange={(e) => this.setValue("dueño", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Servicio</Form.Label>
              <Form.Control
              value={this.state.vehiculo.servicio}
                onChange={(e) => this.setValue("servicio", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="light"
              onClick= {() => 
                this.setState({
                  confirmation: {...this.state.confirmation, show:true},
                })
              }
            >
              Guardar Vehículo
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
