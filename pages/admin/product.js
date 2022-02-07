// core components
import ProductForm from "../../components/Forms/ProductForm";
import ProductHeader from "../../components/Headers/ProductHeader.js";

import React, { useEffect, useState } from "react";
import useToggle from "../../hooks/useToggle";
// reactstrap components
import {
  Card,
  Col,
  Container,
  Container as Modal3D,
  Form,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import delData from "../../hooks/delData";
import ModifyProductForm from "../../components/Forms/ModifyProductForm";
import ModalBox from "../../layouts/ModalBox";
import { Product3D } from "../../layouts/Product3D";
import { Product2D } from "../../layouts/Product2D";

import prisma from "../../prisma/prisma";
import Layout_Admin from "../../layouts/layout_admin";

const Products = ({
  productList,
  collectionList,
  performanceList,
  packagingList,
  propertyList,
}) => {
  const [p_selected, setSelection] = useState(0);

  const [show, setShow] = useState(false);

  const [modal, setModal] = useToggle(false);
  const [modal3d, setModal3d] = useToggle(false);
  const [modalModif, setModif] = useToggle(false);
  const [modalSvg, setModalSvg] = useToggle(false);

  const [productState, setProductState] = useState([]); //update when deleting

  useEffect(() => {
    productList && productList.length && setProductState(productList);
  }, [productList]);

  const removeProduct = (pid) => {
    delData("/delProduct/" + pid);
    setProductState(productState.filter((obj) => obj.product_id !== pid));
  };

  return (
    <Layout_Admin>
      <Container fluid>
        <Row>
          {" "}
          {productList &&
          collectionList &&
          productList.length &&
          collectionList.length &&
          productList.length > 0 &&
          collectionList.length > 0 ? (
            <ProductHeader
              products={productState}
              collections={collectionList}
            />
          ) : (
            "Aucun Produit"
          )}
        </Row>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default ">
              <Card.Header>
                <h3 className="text-white mb-0">Liste des produits</h3>
              </Card.Header>
              {productState &&
              productState.length &&
              productState.length > 0 ? (
                <Table responsive>
                  <thead>
                    <tr>
                      <th scope="col" className="p-2">
                        <i className="far fa-trash-alt" />
                      </th>
                      <th scope="col" className="p-2">
                        <i className="far fa-list-alt"></i>
                      </th>
                      <th scope="col" className="p-2">
                        <i className="far fa-edit"></i>
                      </th>
                      <th scope="col" className="p-2">
                        <i className="fas fa-cubes"></i>
                      </th>
                      <th scope="col" className="p-2">
                        <i className="fas fa-route"></i>
                      </th>
                      <th className="p-2">
                        <i className="far fa-file-pdf "></i>
                      </th>
                      <th scope="col">Id</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Collection</th>
                      <th scope="col">Prix</th>
                      <th scope="col">Dimensions</th>
                      <th scope="col">Spectre</th>
                      <th scope="col">Type</th>
                      <th scope="col">Matière</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(productState).map((a, i) => {
                      return (
                        <tr key={a + i}>
                          <td
                            onClick={() => removeProduct(a.product_id)}
                            className="p-2"
                          >
                            <i className="far fa-trash-alt text-danger"></i>
                          </td>
                          <td
                            onClick={() => {
                              setSelection(a);
                              setShow(true);
                            }}
                            className="p-2"
                          >
                            <i className="far fa-list-alt text-info"></i>
                          </td>
                          <td
                            onClick={() => {
                              setSelection(a);
                              setShow(true);
                            }}
                            className="p-2"
                          >
                            <i className="far fa-edit text-orange"></i>
                          </td>
                          <td
                            onClick={() => {
                              setModal3d();
                              setSelection(a);
                            }}
                            className="p-2"
                          >
                            <i className="fas fa-cubes text-pink"></i>
                          </td>
                          <td
                            onClick={() => {
                              setModalSvg();
                              setSelection(a);
                            }}
                            className="p-2"
                          >
                            <i className="fas fa-route text-purple"></i>
                          </td>
                          <td className="p-2">
                            <i className="far fa-file-pdf text-yellow"></i>
                          </td>
                          <td>{a.product_id}</td>
                          <td>{a.name}</td>
                          <td>{a.col_name}</td>
                          <td>{a.price} €</td>
                          <td>
                            {a.width}x{a.length}x{a.depth}
                          </td>
                          <td>{a.spectre} Hz</td>
                          <td>{a.type}</td>
                          <td>{a.wood}</td>
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
            <Card>
              <Card.Header>
                <h3 className="mb-0">Ajouter un produit</h3>
              </Card.Header>
              <Card.Body>
                {productList &&
                collectionList &&
                propertyList &&
                packagingList &&
                performanceList ? (
                  <ProductForm
                    productList={productList}
                    collectionList={collectionList}
                    packagingList={packagingList}
                    performanceList={performanceList}
                    propertyList={propertyList}
                  />
                ) : (
                  "Aucun produit trouvé"
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ModalBox
        title="Modification du produit"
        show={show}
        setShow={setShow}
        button1="Fermer"
        button2="Enregistrer"
      >
        {/*  <ModifyProductForm
          p_selected={p_selected}
          productList={productList}
          collectionList={collectionList}
          packagingList={packagingList}
          propertyList={propertyList}
          performanceList={performanceList}
        /> */}
      </ModalBox>
    </Layout_Admin>
  );
};

export default Products;

export async function getServerSideProps(context) {
  const productList = await prisma.product.findMany({});
  const customerList = await prisma.customer.findMany({});
  const collectionList = await prisma.collection.findMany({});
  const performanceList = await prisma.performance.findMany({});
  const packagingList = await prisma.packaging.findMany({});
  const propertyList = await prisma.property.findMany({});
  const statusList = await prisma.status.findMany({});
  const itemList = await prisma.item.findMany({});
  const deliveryList = await prisma.delivery.findMany({});
  const invoiceList = JSON.parse(
    JSON.stringify(await prisma.invoice.findMany({}))
  );
  const discountList = JSON.parse(
    JSON.stringify(await prisma.discount.findMany({}))
  );
  const transactionList = JSON.parse(
    JSON.stringify(await prisma.transaction.findMany({}))
  );
  const materialList = JSON.parse(
    JSON.stringify(await prisma.material.findMany({}))
  );
  return {
    props: {
      productList,
      customerList,
      collectionList,
      performanceList,
      packagingList,
      invoiceList,
      materialList,
      propertyList,
      statusList,
      itemList,
      transactionList,
      discountList,
      deliveryList,
    },
  };
}
