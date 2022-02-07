/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "react-bootstrap";

const ProductHeader = ({ products, collections }) => {
  const prixMoyen = (a) => {
    return a.reduce((total, next) => total + next.price, 0) / a.length;
  };

  return (
    <Row>
      <Col>
        <Card className="card-stats mb-4 mb-xl-0">
          <Card.Body>
            <Row>
              <div className="col">
                <Card.Title tag="h5" className="text-uppercase text-muted mb-0">
                  Produits
                </Card.Title>
                <span className="h2 font-weight-bold mb-0">
                  {products.length}
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-info text-white rounded-circle ">
                  <i className="fas fa-chart-pie" />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-stats mb-4 mb-xl-0">
          <Card.Body>
            <Row>
              <div className="col">
                <Card.Title tag="h5" className="text-uppercase text-muted mb-0">
                  Collections
                </Card.Title>
                <span className="h2 font-weight-bold mb-0">
                  {collections.length}
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-warning text-white rounded-circle ">
                  <i className="fas fa-layer-group" />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-stats mb-4 mb-xl-0">
          <Card.Body>
            <Row>
              <div className="col">
                <Card.Title tag="h5" className="text-uppercase text-muted mb-0">
                  Prix moyen
                </Card.Title>
                <span className="h2 font-weight-bold mb-0">
                  {prixMoyen(products)} €
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle ">
                  <i className="ni ni-chart-bar-32" />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductHeader;
