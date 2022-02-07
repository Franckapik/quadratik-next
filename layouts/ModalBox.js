import { Button, Card, Modal } from "react-bootstrap";

const ModalBox = ({
  title,
  isOpen,
  toggle,
  button1,
  button2,
  children,
  noheader,
}) => {
  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={isOpen}
      toggle={toggle}
      size="xl"
    >
      <div className="modal-body pb-0">
        <Card>
          {!noheader ? (
            <Card.Header>
              <h3 className="mb-0">{title}</h3>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={toggle}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </Card.Header>
          ) : null}
          <Card.Body className="m-0 p-0">{children}</Card.Body>
        </Card>
      </div>
      <div className="modal-footer">
        {button1 ? (
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={toggle}
          >
            {button1}
          </Button>
        ) : null}
        {button2 ? (
          <Button color="primary" type="button">
            {button2}
          </Button>
        ) : null}
      </div>
    </Modal>
  );
};

export default ModalBox;
