import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

const TransactionInputs = ({ nextId }) => {
  const {
    register,
    formState: { errors },
    setValue,
    unregister,
  } = useFormContext();

  useEffect(() => {
    setValue("transaction.transaction_id", nextId);
    setValue("invoice.transaction_id", nextId);

    return () => {
      unregister("transaction");
      unregister("invoice.transaction_id");
    };
  }, [setValue, unregister, nextId]);
  return (
    <>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="transaction_id">
              {" "}
              Transaction Id{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("transaction.transaction_id")}
              placeholder={nextId}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_amount">
              {" "}
              Montant{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("transaction.amount", { required: true })}
            />
            {errors.name?.type === "required" && "Un montant est requis"}
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_status">
              {" "}
              Statut{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("transaction.status", { required: true })}
            />
            {errors.name?.type === "required" && "Un statut est requis"}
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_mode">
              {" "}
              Mode{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("transaction.mode", { required: true })}
            />
            {errors.name?.type === "required" && "Un mode est requis"}
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_datec">
              {" "}
              Date de transaction{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="date"
              {...register("transaction.date_created", { required: true })}
            />
            {errors.name?.type === "required" && "Une date est requise"}
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_datep">
              {" "}
              Date de paiement{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="date"
              {...register("transaction.date_payment", { required: true })}
            />
            {errors.name?.type === "required" && "Une date est requise"}
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_last">
              {" "}
              Derniers nombres{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("transaction.last_numbers")}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_brand">
              {" "}
              Marque de carte{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("transaction.card_brand")}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label className="form-control-label" htmlFor="t_desc">
              {" "}
              Description{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("transaction.desc", { maxLength: "100" })}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default TransactionInputs;
