import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";

export const CollectionForm = ({ nextId, errorsForm }) => {
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    setValue("collection.collection_id", nextId);
    setValue("product.collection_id", nextId);

    return () => {
      unregister("collection");
      unregister("product.collection_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="collection_name">
              Identifiant Collection
            </Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={nextId}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="collection_name">Nom</Form.Label>
            <Form.Control
              className="form-control"
              {...register("collection.col_name", { required: true })}
            ></Form.Control>
            {errorsForm &&
              errorsForm.collection &&
              errorsForm.collection.col_name?.type === "required" &&
              "Un nom est requis"}
            {errorsForm &&
              errorsForm.collection &&
              errorsForm.collection.col_name?.type === "maxLength" &&
              "Le nom est trop long"}
          </Form.Group>
        </Col>
      </Row>

      <Form.Group>
        <Form.Label htmlFor="collection_desc">Description</Form.Label>
        <Form.Control
          className="form-control"
          rows="3"
          {...register("collection.desc")}
        />
      </Form.Group>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="collection_folder">Nom de dossier</Form.Label>

            <Form.Control
              className="form-control"
              type="text"
              {...register("collection.folder")}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="col_publish">Publication</Form.Label>
            <select
              className="form-control"
              type="select"
              {...register("collection.col_publish")}
            >
              <option value="true">Publication en boutique</option>
              <option value="false">Stockage caché</option>
            </select>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
