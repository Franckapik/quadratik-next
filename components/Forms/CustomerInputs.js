import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

const CustomerInputs = ({ nextId }) => {
  const {
    formState: { errors },
    register,
    setValue,
    unregister,
  } = useFormContext();

  useEffect(() => {
    setValue("customer.user_id", nextId);
    setValue("invoice.user_id", nextId);

    return () => {
      unregister("customer");
      unregister("invoice.user_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="user_id">
              {" "}
              Id{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("customer.user_id")}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="session_id">
              {" "}
              Session Id{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.session_id")}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_name">
              {" "}
              Nom{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.name", { required: true, maxLength: 20 })}
            />
            {errors.name?.type === "required" && "Un nom est requis"}
            {errors.name?.type === "maxLength" && "Le nom est trop long"}
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_firstname">
              {" "}
              Prénom{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.firstname", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.name?.type === "required" && "Un prénom est requis"}
            {errors.name?.type === "maxLength" && "Le prénom est trop long"}
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_address">
              {" "}
              Adresse{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.address", {
                required: true,
                maxLength: 150,
              })}
            />
            {errors.name?.type === "required" && "Une adresse est requise"}
            {errors.name?.type === "maxLength" && "L'adresse est trop longue"}
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_postal">
              {" "}
              Postal{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.postal", { required: true, maxLength: 5 })}
            />
            {errors.name?.type === "required" && "Un code postal est requis"}
            {errors.name?.type === "maxLength" &&
              "Le code postal est trop long"}
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_city">
              {" "}
              Ville{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.city", { required: true, maxLength: 80 })}
            />
            {errors.name?.type === "required" && "Une ville est requise"}
            {errors.name?.type === "maxLength" &&
              "Le nom de ville est trop long"}
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_mail">
              {" "}
              Mail{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.mail", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.name?.type === "required" && "Une adresse mail est requise"}
            {errors.name?.type === "pattern" && "L'adresse mail est erronée"}
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="c_country">
              {" "}
              Pays{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("customer.country", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.name?.type === "required" && "Un pays est requis"}
            {errors.name?.type === "maxLength" &&
              "Le nom de pays est trop long"}
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default CustomerInputs;
