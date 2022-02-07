import { Col, Form, Row } from "react-bootstrap";

const FindRelaisInputs = ({
  errors,
  register,
  setValue,
  nextId,
  unregister,
}) => (
  <>
    <Row form>
      <Col md={4}>
        <Form.Group>
          <Form.Label className="form-control-label" htmlFor="c_address">
            {" "}
            Adresse{" "}
          </Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            {...register("relais.address", { required: true, maxLength: 150 })}
          />
          {errors.name?.type === "required" && "Une adresse est requise"}
          {errors.name?.type === "maxLength" && "L'adresse est trop longue"}
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label className="form-control-label" htmlFor="c_postal">
            {" "}
            Postal{" "}
          </Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            {...register("relais.postal", { required: true, maxLength: 5 })}
          />
          {errors.name?.type === "required" && "Un code postal est requis"}
          {errors.name?.type === "maxLength" && "Le code postal est trop long"}
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group>
          <Form.Label className="form-control-label" htmlFor="c_city">
            {" "}
            City{" "}
          </Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            {...register("relais.city", { required: true, maxLength: 80 })}
          />
          {errors.name?.type === "required" && "Une ville est requise"}
          {errors.name?.type === "maxLength" && "Le nom de ville est trop long"}
        </Form.Group>
      </Col>
    </Row>
  </>
);

export default FindRelaisInputs;
