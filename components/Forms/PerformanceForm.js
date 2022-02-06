import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, FormGroup, Row } from "react-bootstrap";

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
          <FormGroup>
            <label htmlFor="perf_ident">Id</label>
            <input
              className="form-control"
              type="text"
              placeholder={nextId}
              disabled
            ></input>
          </FormGroup>
        </Col>
        <Col md={10}>
          {" "}
          <FormGroup>
            <label htmlFor="performance_desc">Description</label>
            <input
              className="form-control"
              type="text"
              {...register("performance.desc", { required: true })}
            ></input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <label htmlFor="performance_freq_min">Frequence minimum</label>
            <input
              className="form-control"
              type="number"
              {...register("performance.freq_min", { required: true })}
            ></input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <label htmlFor="performance_freq_max">Frequence maximum</label>
            <input
              className="form-control"
              type="number"
              {...register("performance.freq_max", { required: true })}
            ></input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <label htmlFor="performance_spectre">Spectre</label>
            <input
              className="form-control"
              type="text"
              {...register("performance.spectre", { required: true })}
            ></input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};
