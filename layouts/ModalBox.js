import { Button, Card, Modal } from "react-bootstrap";

const ModalBox = ({
  title,
  show,
  setShow,
  button1,
  button2,
  children,
  noheader,
}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      {" "}
      {!noheader ? (
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="mb-0">{title}</h3>
          </Modal.Title>
        </Modal.Header>
      ) : null}
      <Modal.Body>
        <Card>
          <Card.Body className="m-0 p-0">{children}</Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        {button1 ? (
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        ) : null}
        {button2 ? (
          <Button color="primary" type="button">
            {button2}
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBox;
