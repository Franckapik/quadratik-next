import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

export const PerformanceForm = ({ nextId, errorsForm }) => {
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    setValue("performance.performance_id", nextId);
    setValue("product.performance_id", nextId);

    return () => {
      unregister("performance");
      unregister("product.performance_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={2}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="perf_ident">Id</Form.Label>
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
            <Form.Label htmlFor="performance_desc">Description</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("performance.desc", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label htmlFor="performance_freq_min">
              Frequence minimum
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("performance.freq_min", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label htmlFor="performance_freq_max">
              Frequence maximum
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("performance.freq_max", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label htmlFor="performance_spectre">Spectre</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("performance.spectre", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
