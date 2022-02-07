import useGeo from "../../hooks/useGeo";
import useToggle from "../../hooks/useToggle";
import ModalBox from "../../layouts/ModalBox";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  Button,
  Col,
  Form,
  InputGroup,
  InputGroupAddon,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
/* import FindRelaisMap from "./FindRelaisMap";
 */
export const DeliveryInputs = ({ nextId }) => {
  const { register, setValue, unregister, watch } = useFormContext();

  useEffect(() => {
    setValue("delivery.delivery_id", nextId);
    setValue("invoice.delivery_id", nextId);

    return () => {
      unregister("delivery");
      unregister("invoice.delivery_id");
    };
  }, [setValue, unregister, nextId]);

  const [modalModif, setModif] = useToggle();

  const [relaisSelected, setRelaisSelected] = useState(0);
  const [addressSelected, setAddressSelected] = useState(0);

  const addressTyped = watch("delivery.recipient_address");

  const { response: addressList } = useGeo(addressTyped);

  useEffect(() => {
    relaisSelected && setValue("delivery.service_point", relaisSelected.id);
  }, [relaisSelected, setValue]);

  return (
    <>
      <Row form>
        <Col md={6}></Col>
        <Col md={6}></Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_id">Identifiant livraison</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder={nextId}
            ></input>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d-recipient">Nom complet</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("delivery.recipient", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_address">Adresse</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("delivery.recipient_address", { required: true })}
            ></input>
            <ListGroup>
              {addressList &&
                addressList.map((a, i) => (
                  <ListGroupItem
                    key={a + i}
                    color="info"
                    onClick={() => {
                      setValue(
                        "delivery.recipient_address",
                        a.properties.label
                      );
                      setAddressSelected({ geo: a.geometry.coordinates });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {a.properties.label}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_postal">Code Postal</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("delivery.postal", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d-city">Ville</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("delivery.city", { required: true })}
            ></input>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_country">Pays</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("delivery.country", { required: true })}
            ></input>
          </Form.Group>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_type">Mode de livraison</Form.Label>
            <select
              className="form-control"
              type="date"
              {...register("delivery.type", { required: true })}
            >
              <option value="maison">Maison</option>
              <option value="pointrelais">Point relais</option>
              <option value="entreprise">Entreprise</option>
            </select>
          </Form.Group>
        </Col>
      </Row>
      <Row form>
        <Col md={2}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_fdp">Frais de ports</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("delivery.fdp")}
            ></input>
          </Form.Group>
        </Col>
        <Col md={4}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_service_point">
              Point relais (Id){" "}
              <span style={{ fontSize: "12px", marginLeft: "10px" }}>
                {" "}
                0 si n'existe pas
              </span>{" "}
            </Form.Label>
            <InputGroup>
              <Form.Control
                className="form-control"
                type="number"
                {...register("delivery.service_point")}
              ></input>
              <InputGroupAddon addonType="append">
                <Button onClick={setModif}>Rechercher</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label htmlFor="d_carrier">Transporteur</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              {...register("delivery.carrier")}
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          {" "}
          <Form.Group>
            <Form.Label htmlFor="d_colis_nb">Nombre de colis</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              {...register("delivery.colis_nb")}
            ></input>
          </Form.Group>
        </Col>
      </Row>

      <ModalBox
        title="Selectionner un relais"
        isOpen={modalModif}
        toggle={setModif}
        button1="Selectionner"
      >
        {/*         <FindRelaisMap
          addressSelected={addressSelected}
          setRelaisSelected={setRelaisSelected}
          relaisSelected={relaisSelected}
        ></FindRelaisMap> */}
      </ModalBox>
    </>
  );
};
