import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import useToggle from "../../hooks/useToggle";
import prisma from "../../prisma/prisma";

const Customers = ({ customer }) => {
  const [c_selected, setSelection] = useState(0);

  const [modalModif, setModif] = useToggle();

  const [userState, setUserState] = useState([]); //update when deleting

  useEffect(() => {
    customer && customer.length && setUserState(customer);
    console.log(customer);
    console.log(userState);
  }, [customer]);

  const removeCustomer = (id) => {
    delData("/delCustomer/" + id);
    setUserState(userState.filter((obj) => obj.user_id !== id));
  };

  return (
    <>
      <Container className="mt--7" fluid>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card>
              <Card.Header className="bg-transparent border-0">
                <h3 className="text-white mb-0">Liste des clients</h3>
              </Card.Header>
              {userState && userState.length && userState.length > 0 ? (
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">
                        <i className="far fa-trash-alt" />
                      </th>
                      <th scope="col">
                        <i className="far fa-edit"></i>
                      </th>
                      {Object.keys(userState[0]).map((a, i) => {
                        return (
                          <th key={a + i} scope="col">
                            {a}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(userState).map((a, i) => {
                      return (
                        <tr key={a + i}>
                          <td onClick={() => removeCustomer(a.user_id)}>
                            <i className="far fa-trash-alt text-danger"></i>
                          </td>
                          <td
                            onClick={() => {
                              setSelection(a);
                              setModif();
                            }}
                          >
                            <i className="far fa-edit text-info"></i>
                          </td>
                          {Object.keys(a).map((b, c) => {
                            return <td key={b + c}>{a[b]}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                "Aucun client existant"
              )}
            </Card>
          </div>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card className="shadow">
              <Card.Header className="bg-transparent">
                <h3 className="mb-0">Ajouter un client</h3>
              </Card.Header>
              <Card.Body>
                {/*                 {userState && userState.length ? (
                  <CustomerForm customer={userState} />
                ) : (
                  "Aucun client trouvé"
                )} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        className="modal-dialog-centered"
        isOpen={modalModif}
        toggle={setModif}
        size="xl"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Détails
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={setModif}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Card className="shadow">
            <Card.Header className="bg-transparent">
              <h3 className="mb-0">Modification du produit</h3>
            </Card.Header>
            <Card.Body>
              {/*               <ModifyCustomerForm c_selected={c_selected} />
               */}{" "}
            </Card.Body>
          </Card>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={setModif}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Customers;

export async function getServerSideProps(context) {
  const customer = await prisma.customer.findMany({});
  console.log(customer);
  return {
    props: { customer },
  };
}
