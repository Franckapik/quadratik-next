import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

export const PropertyForm = ({ nextId, errorsForm }) => {
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    setValue("property.property_id", nextId);
    setValue("product.property_id", nextId);

    return () => {
      unregister("property");
      unregister("product.property_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="prop_id">Identifiant Propriété</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={nextId}
              disabled
            ></input>
          </Form.Group>
        </Col>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_depth">Type</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("property.type", { required: true })}
              placeholder="D1N7P10L60"
            ></input>
          </Form.Group>
        </Col>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_wood">Matière</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("property.wood", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>

      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_depth">Profondeur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.depth", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_length">Longueur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.length", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_weight">Poids</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.weight", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_width">Largeur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.width", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_width_cel">
              Largeur des cellules
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.width_cel", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_area">Aire</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.area", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_part_nb">Nombre de pièces</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.part_nb", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_cel_nb">
              Nombre de cellules
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("property.cel_nb", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_paint">Peinture </Form.Label>
            <select
              className="form-control"
              type="select"
              {...register("property.paint")}
            >
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="property_finish">Finition</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("property.finish", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
