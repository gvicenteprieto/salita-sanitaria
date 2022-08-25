import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NumCarac from "./NumCarac";
//import Check from "./Check";

const Formulario = () => {

  return (
    <Form>
      <NumCarac></NumCarac>
      {/* <Check></Check> */}
      <Button variant="primary" type="submit">
        Generar Contraseña
      </Button>
      <Form.Control type="text" value="V;ZQf}seH3Ij" readOnly />
    </Form>
  );
};

export default Formulario;