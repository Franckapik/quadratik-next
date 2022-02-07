import easyinvoice from "easyinvoice";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import InvoiceForm from "../../components/Forms/InvoiceForm";
import delData from "../../hooks/delData";
import { invoicePdf } from "../../layouts/invoicePdf";
import prisma from "../../prisma/prisma";

import Layout_Admin from "../../layouts/layout_admin";

const Orders = ({
  productList,
  customerList,
  invoiceList,
  itemList,
  transactionList,
  statusList,
  discountList,
  deliveryList,
}) => {
  const facturation = (template, invoice, items, business) => {
    //get invoice data
    template.client.company = invoice.name + " " + invoice.firstname;
    template.client.address = invoice.address;
    template.client.zip = invoice.postal;
    template.client.city = invoice.city;
    template.client.country = invoice.country;
    template.invoiceNumber = invoice.order_number;
    template.invoiceDate = invoice.order_date;
    template.sender.company = business.business;
    template.sender.address = business.address;
    template.sender.zip = business.postal;
    template.sender.city = business.city;
    template.sender.country = business.country;

    const itemsFiltered = items.filter(
      (a, i) => a.invoice_id === invoice.invoice_id
    );

    itemsFiltered.map((a, i) => {
      let p = {};
      p.quantity = a.qty;
      p.description = productList.filter(
        (b, i) => b.product_id === a.product_id
      )[0].name;
      p.tax = 0;
      p.price = a.price;
      template.products.push(p);
      return null;
    });

    //send to pdf
    easyinvoice.createInvoice(invoicePdf, function (result) {
      //The response will contain a base64 encoded PDF file
      result && easyinvoice.download("myInvoice.pdf", result.pdf);
    });
  };

  const [invoiceState, setInvoiceState] = useState([]); //update when deleting

  useEffect(() => {
    invoiceList && invoiceList.length && setInvoiceState(invoiceList);
  }, [invoiceList]);

  const remove = (pid) => {
    delData("/delInvoice/" + pid);
    setInvoiceState(invoiceState.filter((obj) => obj.invoice_id !== pid));
  };

  return (
    <Layout_Admin>
      <Container fluid>
        <Row className="mt-5">
          <Col>
            <Card className="bg-default ">
              <Card.Header>
                <h3 className="text-white mb-0">Les commandes</h3>
              </Card.Header>
              <Table responsive>
                <thead>
                  <tr>
                    <th scope="col">
                      <i className="far fa-trash-alt" />
                    </th>
                    <th scope="col">
                      <i className="far fa-file-pdf"></i>
                    </th>
                    <th scope="col">
                      <i className="far fa-edit"></i>
                    </th>
                    <th scope="col">Id</th>
                    <th scope="col">Client</th>
                    <th scope="col">Statut</th>
                    <th scope="col">FDP</th>
                    <th scope="col">Date</th>
                    <th scope="col">Réduction</th>
                    <th scope="col">Items</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(invoiceState).map((a, i) => {
                    return (
                      <tr key={a + i}>
                        <td onClick={() => remove(a.invoice_id)}>
                          <i className="far fa-trash-alt text-danger"></i>
                        </td>
                        <td
                          onClick={() =>
                            facturation(
                              invoicePdf,
                              a,
                              itemList,
                              businessList[0]
                            )
                          }
                        >
                          <i className="far fa-file-pdf text-yellow"></i>
                        </td>
                        <td>
                          <i className="far fa-edit text-info"></i>
                        </td>
                        <td>{a.invoice_id}</td>
                        <td>{a.name}</td>
                        <td>{a.status_msg}</td>
                        <td>{a.fdp} €</td>
                        <td>{a.order_date}</td>
                        <td>{a.reduction} €</td>
                        <td>produits</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Header>
                <h3 className="mb-0">Ajouter un devis/facture</h3>
              </Card.Header>
              <Card.Body>
                {invoiceState &&
                invoiceState.length &&
                statusList &&
                itemList &&
                transactionList &&
                productList &&
                discountList &&
                customerList &&
                deliveryList ? (
                  <InvoiceForm
                    invoiceList={invoiceState}
                    statusList={statusList}
                    itemList={itemList}
                    transactionList={transactionList}
                    productList={productList}
                    discountList={discountList}
                    customerList={customerList}
                    deliveryList={deliveryList}
                  />
                ) : (
                  "Aucune facturation possible"
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout_Admin>
  );
};

export default Orders;

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
