import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Component } from "react";

class ModalComp extends Component {
  state = {
    abierto: false,
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {

    const modalStyles={
      position: "absolute",
      //top: "50%",
      left: "50%",
      transform: "translate(-50%, 50%)"
  
    }
    return (
      <div className="container">
        <h5 className="card-title m-3">Modal</h5>

        <Button color="success" onClick={this.abrirModal}>
          abrir Modal
        </Button>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>Sesión</ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="usuario">usuario</Label>
              <Input type="text" id="usuario" />
            </FormGroup>

            <FormGroup>
              <Label for="password">password</Label>
              <Input type="text" id="password" />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">Inciar Sesión</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar Sesión</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
