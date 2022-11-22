import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";

export default class EmpleadosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      empleado: {
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        telefono: "",
        mail: "",
        direccion: "",
      },
    };
  }

setValue(inicioe,value){
    this.setState({
        empleado:{
            ...this.state.empleado,
            [inicioe]: value,
        },
    });
}

guardarEmpleados(){
  
  request
  .post('/empleados',this.state.empleado)
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
      <Container id="empleados-crear-container">
        <Loading show = {this.state.loading} />
        <Row>
          <h2> Registrar Empleado </h2>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("apellido_p", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("apellido_m", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("telefono", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => this.setValue("mail", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("direccion", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="light"
              onClick={() => console.log(this.guardarEmpleados())}
            >
              Guardar Empleado
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
