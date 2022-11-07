import React from "react";
import { Container, Carousel } from "react-bootstrap";


export default class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{marginTop:"8%"}}>
        <Carousel fade variant="light">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./ph1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 bold >Diagnósticos</h3>
              <p bold> Equipo especializado en detección de fallas.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./ph2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 bold >Reparaciones</h3>
              <p bold >En manos de los mejores profesionales.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./ph3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 bold>Cuidado</h3>
              <p bold>
                Dele a su vehículo el descans que necesita.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
