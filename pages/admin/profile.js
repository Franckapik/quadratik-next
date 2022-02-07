import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
// core components
import Layout_Admin from "../../layouts/layout_admin.js";

import prisma from "../../prisma/prisma";

const Profile = ({ businessList }) => {
  let b =
    businessList && businessList.length
      ? businessList[businessList.length - 1]
      : 0;

  return (
    <Layout_Admin>
      <Container>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile ">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      image de profile
                    </a>
                  </div>
                </Col>
              </Row>

              <Card.Body className="pt-0 pt-md-8">
                <div className="text-center">
                  <h3>
                    Fanch Cavellec
                    <span className="font-weight-light">, 33</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Feins, France
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Responsable et Administrateur de Quadratik.fr
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Solution acoustique
                  </div>
                  <hr className="my-4" />
                  <p>Informatique, Acoustique, Musique et Techniques sonores</p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Plus d'info
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {b ? (
            <Col className="order-xl-1" xl="8">
              <Card>
                <Card.Header>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Mon compte</h3>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Mon profile {b.business}
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Responsable
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              defaultValue={b.owner}
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Téléphone
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              defaultValue={b.tel}
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Adresse mail
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              id="input-email"
                              placeholder={b.mail}
                              type="email"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">Contact</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Addresse
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              defaultValue={b.address}
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Ville
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              defaultValue={b.city}
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="4">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Pays
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              defaultValue={b.country}
                              id="input-country"
                              placeholder="France"
                              type="text"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="4">
                          <Form.Group>
                            <Form.Label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Code Postal
                            </Form.Label>
                            <Form.Control
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder={b.postal}
                              type="number"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">
                      L'entreprise
                    </h6>
                    <div className="pl-lg-4">
                      <Form.Group>
                        <Row>
                          <Col lg="4">
                            <Form.Group>
                              <Form.Label
                                className="form-control-label"
                                htmlFor="input-siret"
                              >
                                Siret
                              </Form.Label>
                              <Form.Control
                                className="form-control-alternative"
                                id="input-siret-code"
                                value={b.siret}
                                type="text"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <Form.Label
                                className="form-control-label"
                                htmlFor="input-sirene"
                              >
                                Sirene
                              </Form.Label>
                              <Form.Control
                                className="form-control-alternative"
                                id="input-sirene-code"
                                value={b.sirene}
                                type="text"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <Form.Label
                                className="form-control-label"
                                htmlFor="input-ape"
                              >
                                Ape
                              </Form.Label>
                              <Form.Control
                                className="form-control-alternative"
                                id="input-ape-code"
                                value={b.ape}
                                type="text"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="8">
                            <Form.Group>
                              <Form.Label
                                className="form-control-label"
                                htmlFor="input-iban"
                              >
                                Iban
                              </Form.Label>
                              <Form.Control
                                className="form-control-alternative"
                                id="input-iban-code"
                                value={b.iban}
                                type="text"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg="4">
                            <Form.Group>
                              <Form.Label
                                className="form-control-label"
                                htmlFor="input-iban"
                              >
                                Bic
                              </Form.Label>
                              <Form.Control
                                className="form-control-alternative"
                                id="input-iban-code"
                                value={b.bic}
                                type="text"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form.Group>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            "Loading"
          )}
        </Row>
      </Container>
    </Layout_Admin>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const businessList = await prisma.business.findMany({});

  return {
    props: {
      businessList,
    },
  };
}
