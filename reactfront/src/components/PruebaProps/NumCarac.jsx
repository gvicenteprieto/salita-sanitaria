import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NumCarac = () => {

  const [caracteres, setCaracteres] = useState(12);

  return (
    <Form.Group className="mb-3" controlId="#">
      <Form.Label>Número de caracteres</Form.Label>
      <Button
        onClick={() => {
          if (caracteres > 1) {
            setCaracteres(caracteres - 1);
          }
        }}
      >
        -
      </Button>
      <Form.Control type="text" value={caracteres} readOnly />
      <Button onClick={() => setCaracteres(caracteres + 1)}>+</Button>
    </Form.Group>
  );
};

export default NumCarac;