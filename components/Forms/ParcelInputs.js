import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";

export const ParcelInputs = ({
  register,
  errors,
  setValue,
  nextId,
  unregister,
}) => {
  return (
    <>
      <Row form>
        <Col md={2}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_house_number">Numero de rue</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.house_number", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_address">Adresse</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("parcel.address", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={2}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_postal">Code postal</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.postal_code", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label htmlFor="p_city">Ville</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("parcel.city", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p-country">Pays</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("parcel.country", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_mail">Email</Form.Label>
            <Form.Control
              className="form-control"
              type="email"
              {...register("parcel.email", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_phone">Téléphone</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.telephone", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_weight">Poids</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.weight", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_length">Longueur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.length", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_width">Largeur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.width", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_height">Hauteur</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.height", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_order">Numero de commande</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("parcel.order_number")}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_assured">
              Valeur assurée{" "}
              <span style={{ fontSize: "10px" }}>(multiple de 100)</span>{" "}
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.insured_value")}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_amount">
              Valeur totale de commande
            </Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.total_order_value")}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p-qty">Quantité de colis</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.quantity", { required: true })}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p-qty">Point Relais (id)</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("parcel.to_service_point")}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="p_ship_method">Transporteur</Form.Label>
            <select
              className="form-control"
              type="date"
              {...register("parcel.shipping_method_checkout_name", {
                required: true,
              })}
            >
              <option value="pointrelais">Point relais</option>
              <option value="maison">Maison</option>
              <option value="entreprise">Entreprise</option>
            </select>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
