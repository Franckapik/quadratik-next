import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

export const PackagingForm = ({ nextId, errorsForm }) => {
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    setValue("packaging.packaging_id", nextId);
    setValue("product.packaging_id", nextId);

    return () => {
      unregister("packaging");
      unregister("product.packaging_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={2}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_id">Id</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={nextId}
              disabled
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={10}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_length">Reference</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("packaging.reference", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_length">Longueur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("packaging.length", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_width">Largueur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("packaging.width", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_weight">Poids</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("packaging.weight", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_depth">Profondeur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("packaging.depth", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="packaging_price">Prix</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("packaging.charge", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="packaging_unit">Unités</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("packaging.unit", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
