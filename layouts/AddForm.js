import { Card } from "react-bootstrap";

export const AddForm = ({ children, toggleFunction, title }) => (
  <Card color="lighter mb-3">
    <Card.Title className="text-center">
      <i className="fas fa-plus m-2"></i> {title}
      <small onClick={toggleFunction}>
        <i className="fas fa-undo btn close text-danger"></i>
      </small>
    </Card.Title>
    <Card.Body className="pt-0">{children} </Card.Body>
  </Card>
);
