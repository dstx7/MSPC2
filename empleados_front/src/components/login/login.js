import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios"; //permite enviar solicitudes del front hacia el back
import app from "../../app.json"; //en caso de cambios en la direccion del back
import "./login.css";
import { isNull } from "util"; //esto sirve para comunicar el front y consultar si existe el token o si es nulo
import Cookies from "universal-cookie"; //esto es para las sesiones temporales
import { calcularExpirarSesion } from "../helper/helper";
import Loading from "../loading/loading";

const {APIHOST} = app;
const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    //alert("boton de iniciar sesion");

    this.setState({ loading: true });
    axios.post(`${APIHOST}/usuarios/login`,{
      usuario: this.state.usuario,
      pass: this.state.pass
    })
    .then((response) =>{
      if (isNull(response.data.token)){
        alert('Usuario y/o Contraseña Invalidos.')
      }
      else{
        cookies.set('_s', response.data.token, {
          path: '/',
          expires: calcularExpirarSesion(),
        });
        this.props.history.push(window.open('/empleados'));
      }
      this.setState({ loading: false });
    })
    .catch((err) => {
      console.log(err);
      this.setState({ loading: false });
    });
  }


  registrate() {
    //alert("boton de registrarse");
    this.props.history.push(window.open('/registrar'));
  }

  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col
            sm="12"
            xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Row>
              <h2> Iniciar Sesión </h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        this.registrate();
                      }}
                    >
                      Regístrate
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      onClick={() => {
                        this.iniciarSesion();
                      }}
                    >
                      Iniciar Sesión
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
