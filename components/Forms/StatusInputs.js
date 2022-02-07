import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

export const StatusInputs = ({ nextId }) => {
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    setValue("status.status_id", nextId);
    setValue("invoice.status_id", nextId);

    return () => {
      unregister("status");
      unregister("invoice.status_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="s_id">Identifiant Statut</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={nextId}
            ></input>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="s_msg">Message de statut</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("status.status_msg", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
