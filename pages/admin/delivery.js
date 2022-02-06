import CustomerForm from "../../components/Forms/CustomerForm";
import DeliveryForm from "../../components/Forms/DeliveryForm";
import ModifyCustomerForm from "../../components/Forms/ModifyCustomerForm";
import useToggle from "../../hooks/useToggle";
import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Table,
  Button,
  Modal,
} from "react-bootstrap";

import prisma from "../../prisma/prisma";
import Layout_Admin from "../../layouts/layout_admin";

const Delivery = ({ deliveryList }) => {
  const [c_selected, setSelection] = useState(0);

  const [modalModif, setModif] = useToggle();

  const [deliveryState, setDeliveryState] = useState([]); //update when deleting

  useEffect(() => {
    deliveryList && deliveryList.length && setDeliveryState(deliveryList);
  }, [deliveryList]);

  const removeCustomer = (id) => {
    /* delData("/delCustomer/" + id); */
    setDeliveryState(deliveryState.filter((obj) => obj.user_id !== id));
  };

  return (
    <Layout_Admin>
      <Container className="mt--7" fluid>
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <Card.Header className="bg-transparent border-0">
                <h3 className="text-white mb-0">Liste des livraisons</h3>
              </Card.Header>
              {deliveryState &&
              deliveryState.length &&
              deliveryState.length > 0 ? (
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
                      {Object.keys(deliveryState[0]).map((a, i) => {
                        return (
                          <th key={a + i} scope="col">
                            {a}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(deliveryState).map((a, i) => {
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
                "Aucun produit existant"
              )}
            </Card>
          </div>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card className="shadow">
              <Card.Header className="bg-transparent">
                <h3 className="mb-0">Ajouter une livraison</h3>
              </Card.Header>
              <Card.Body>
                {deliveryState && deliveryState.length ? (
                  <DeliveryForm deliveryList={deliveryState} />
                ) : (
                  "Aucune livraison trouvé"
                )}
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
              <ModifyCustomerForm c_selected={c_selected} />
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
    </Layout_Admin>
  );
};

export default Delivery;

export async function getServerSideProps(context) {
  const deliveryList = await prisma.delivery.findMany({});
  return {
    props: {
      deliveryList,
    },
  };
}
