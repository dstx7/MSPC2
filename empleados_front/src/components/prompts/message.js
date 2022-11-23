import React from "react";
import { Modal, Container } from "react-bootstrap";
import "./prompts.css";
import {isUndefined , isNull } from 'util';

export default class MessagePrompts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        show:false,
    };
  }
//esta linea trae el mensaje
  componentWillReceiveProps(nextProps) {
    if (nextProps.show) this.setState({ show: true}, this.hideMessage());
}

//oculta el mensaje
hideMessage() {
    setTimeout(() => {
        this.setState( { show: false });
    }, this.props.duration);
}

//esta linea saca el mensaje
onExited() {
    if(!isUndefined (this.props.onExited) && !isNull(this.props.onExited))
    this.props.onExited();
}

  render() {
    return (
      <Container>
        <Modal
          id="message-prompt"
          centered
          show={this.state.show}
          onExited={() => this.onExited()}
        >
          <Modal.Body>{this.props.text}</Modal.Body>
        </Modal>
      </Container>
    );
  }
}
