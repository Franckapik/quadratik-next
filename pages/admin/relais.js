// core components
import FindRelaisInputs from "../../components/Forms/FindRelaisInputs";
import FindRelaisMap from "../../components/Forms/FindRelaisMap";

import useGeo from "../../hooks/useGeo";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// reactstrap components
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
} from "react-bootstrap";

import prisma from "../../prisma/prisma";
import Layout_Admin from "../../layouts/layout_admin";

const Relais = () => {
  const [relaisSelected, setRelaisSelected] = useState(0);
  const [addressSelected, setAddressSelected] = useState(0);

  const handleRegistration = (data) => {
    setAddressSelected(data.relais);
  };

  const handleError = (errors) => console.log("error", errors);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm({});

  const addressTyped = watch("relais.input");

  const { response: addressList } = useGeo(addressTyped);

  const carriersList = 0;

  return (
    <Layout_Admin>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default ">
              <Card.Header>
                <h3 className="text-white mb-0">
                  Liste des transporteurs disponibles (carriers)
                </h3>
              </Card.Header>
              {carriersList &&
              carriersList.length &&
              carriersList.length > 0 ? (
                <Table responsive>
                  <tbody>
                    {Array.from(carriersList).map((a, i) => {
                      return (
                        <tr key={"carrier" + i}>
                          <td>{a}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                "Aucun transporteur disponible"
              )}
            </Card>
          </div>
        </Row>
        <Row className="mt-5">
          <div className="col">
            <Card>
              <Card.Header>
                <h3 className="mb-0">Rechercher un relais</h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
                  <Form.Group>
                    <Form.Label
                      className="form-control-label"
                      htmlFor="r_address"
                    >
                      {" "}
                      Adresse recherch??e{" "}
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      {...register("relais.input")}
                    />
                    {errors.name?.type === "required" &&
                      "Une adresse est requise"}
                    {errors.name?.type === "maxLength" &&
                      "L'adresse est trop longue"}
                  </Form.Group>
                  <ListGroup>
                    {addressList &&
                      addressList.map((a, i) => (
                        <ListGroupItem
                          key={a + i}
                          color="info"
                          onClick={() => {
                            setValue("relais.input", a.properties.label);
                            setValue("relais.address", a.properties.name);
                            setValue("relais.postal", a.properties.citycode);
                            setValue("relais.city", a.properties.city);
                            setValue("relais.geo", a.geometry.coordinates);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {a.properties.label}
                        </ListGroupItem>
                      ))}
                  </ListGroup>
                  <FindRelaisInputs
                    errors={errors}
                    register={register}
                  ></FindRelaisInputs>

                  <Button>Rechercher</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Row>
        <FindRelaisMap
          addressSelected={addressSelected}
          setRelaisSelected={setRelaisSelected}
          relaisSelected={relaisSelected}
        ></FindRelaisMap>
        <Row className="mt-5">
          <div className="col">
            <Card>
              <Card.Header>
                <h3 className="mb-0">Relais selectionn??</h3>
              </Card.Header>
              <Card.Body>
                {relaisSelected ? (
                  <Row>
                    <Col>
                      <ListGroup>
                        <ListGroupItem>
                          {relaisSelected.name} [{relaisSelected.id} ]
                        </ListGroupItem>
                        <ListGroupItem>
                          {relaisSelected.house_number} {relaisSelected.street}{" "}
                          {relaisSelected.postal_code} {relaisSelected.city}
                        </ListGroupItem>
                        <ListGroupItem>{relaisSelected.carrier}</ListGroupItem>
                        <ListGroupItem>{relaisSelected.code}</ListGroupItem>
                        <ListGroupItem>
                          {relaisSelected.open_tomorrow
                            ? "Ouvert demain"
                            : "Ferm?? demain"}
                        </ListGroupItem>
                        <ListGroupItem>
                          {relaisSelected.open_upcoming_week
                            ? "Ouvert la semaine prochaine"
                            : "Ferm?? la semaine prochaine"}
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col>
                      {" "}
                      {relaisSelected &&
                        [
                          "Lundi",
                          "Mardi",
                          "Mercredi",
                          "Jeudi",
                          "Vendredi",
                          "Samedi",
                        ].map((a, i) => (
                          <ListGroupItem>
                            <strong>{a} </strong>{" "}
                            {relaisSelected.formatted_opening_times[i].map(
                              (a) => a + " "
                            )}
                          </ListGroupItem>
                        ))}
                    </Col>
                  </Row>
                ) : (
                  "Aucun relais selectionn??"
                )}
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </Layout_Admin>
  );
};

export default Relais;

export async function getServerSideProps(context) {
  const productList = await prisma.product.findMany({});
  const customerList = await prisma.customer.findMany({});
  const collectionList = await prisma.collection.findMany({});
  const performanceList = await prisma.performance.findMany({});
  const packagingList = await prisma.packaging.findMany({});
  const propertyList = await prisma.property.findMany({});
  const statusList = await prisma.status.findMany({});
  const itemList = await prisma.item.findMany({});
  const deliveryList = await prisma.delivery.findMany({});
  const invoiceList = JSON.parse(
    JSON.stringify(await prisma.invoice.findMany({}))
  );
  const discountList = JSON.parse(
    JSON.stringify(await prisma.discount.findMany({}))
  );
  const transactionList = JSON.parse(
    JSON.stringify(await prisma.transaction.findMany({}))
  );
  const materialList = JSON.parse(
    JSON.stringify(await prisma.material.findMany({}))
  );
  return {
    props: {
      productList,
      customerList,
      collectionList,
      performanceList,
      packagingList,
      invoiceList,
      materialList,
      propertyList,
      statusList,
      itemList,
      transactionList,
      discountList,
      deliveryList,
    },
  };
}
