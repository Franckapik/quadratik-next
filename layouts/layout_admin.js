import { Col, Container, Dropdown, Nav, Row } from "react-bootstrap";

export default function Layout_Admin({ children, title }) {
  /*   const { firstName, publicMetadata } = useUser();
   */
  return (
    <Container fluid style={{ paddingLeft: "0" }} className="admin">
      <>
        <Row>
          <Col xs={2}>Sidebar</Col>
          <Col xs={10}>
            <header>
              <Nav className="justify-content-center align-items-center mt-2">
                <Nav.Item className="m-3">{/* <UserButton /> */}</Nav.Item>
                <Nav.Item className="m-3">firstname</Nav.Item>
              </Nav>
            </header>
            <main className="p-5">{children}</main>
          </Col>
        </Row>
      </>
    </Container>
  );
}
