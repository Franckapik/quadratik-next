
import React from "react";
// reactstrap components
import { Col, Container, Row } from "react-bootstrap";

const UserHeader = () => {

    "https://citations.ouest-france.fr/apis/export.php?json&key=464fzer5&t='+escape('day')+'&author='+''+'&theme='+''+'&word='+''"
  );

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="10" md="10">
              <h1 className="display-2 text-white">Bonjour Fanch</h1>
              <p className="text-white mt-0 mb-5">
                {citation && citation.response ? citation.response.quote : ""}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;