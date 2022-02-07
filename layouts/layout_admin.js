import { Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
import { Sidebar } from "../components/Sidebar/sidebar";

export default function Layout_Admin({ children, title }) {
  /*   const { firstName, publicMetadata } = useUser();
   */
  return (
    <Container fluid className="admin">
      <Row>
        <Col className="sidebar">
          <Sidebar></Sidebar>
        </Col>
        <Col md={{ span: 11, offset: 1 }} className="scrollit col-lg-offset-3">
          <header>
            <Nav className=" header-admin justify-content-center align-items-center">
              <Nav.Item>{/* <UserButton /> */}</Nav.Item>
              <Nav.Item>Utilisateur confirmé</Nav.Item>
            </Nav>
          </header>
          <main>{children}</main>
        </Col>
      </Row>
    </Container>
  );
}
