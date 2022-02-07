import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

export const DiscountInputs = ({ nextId }) => {
  const { register, setValue, unregister } = useFormContext();
  useEffect(() => {
    setValue("discount.discount_id", nextId);
    setValue("invoice.discount_id", nextId);

    return () => {
      unregister("discount");
      unregister("invoice.discount_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_id">Identifiant Discount</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={nextId}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_red">Reduction (%)</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("discount.reduction", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_code">Code</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("discount.code", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label htmlFor="d_exp">Date d'expiration</Form.Label>
            <Form.Control
              className="form-control"
              type="date"
              {...register("discount.expiration", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
