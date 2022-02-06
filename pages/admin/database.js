// core components

import React from "react";
// reactstrap components
import { Container } from "react-bootstrap";
import Layout_Admin from "../../layouts/layout_admin";
import { List } from "../../layouts/List";

import prisma from "../../prisma/prisma";

const Database = ({
  productList,
  customerList,
  collectionList,
  performanceList,
  packagingList,
  invoiceList,
  materialList,
  propertyList,
}) => {
  return (
    <Layout_Admin>
      <Container className="mt--7" fluid>
        {/* Dark table */}
        {productList && productList.length && productList.length > 0 ? (
          <List data={productList} name="produits" />
        ) : (
          "Aucun produit"
        )}
        {customerList && customerList.length && customerList.length > 0 ? (
          <List data={customerList} name="clients" />
        ) : (
          "Aucun client"
        )}
        {collectionList &&
        collectionList.length &&
        collectionList.length > 0 ? (
          <List data={collectionList} name="collections" />
        ) : (
          "Aucune collection"
        )}
        {propertyList && propertyList.length && propertyList.length > 0 ? (
          <List data={propertyList} name="propriétés" />
        ) : (
          "Aucune propriété"
        )}
        {performanceList &&
        performanceList.length &&
        performanceList.length > 0 ? (
          <List data={performanceList} name="performances" />
        ) : (
          "Aucune performance"
        )}
        {packagingList && packagingList.length && packagingList.length > 0 ? (
          <List data={packagingList} name="packaging" />
        ) : (
          "Aucun packaging"
        )}
        {invoiceList && invoiceList.length && invoiceList.length > 0 ? (
          <List data={invoiceList} name="factures" />
        ) : (
          "Aucune facture"
        )}
        {materialList && materialList.length && materialList.length > 0 ? (
          <List data={materialList} name="materiaux" />
        ) : (
          "Aucune facture"
        )}
      </Container>
    </Layout_Admin>
  );
};

export default Database;

export async function getServerSideProps(context) {
  const productList = await prisma.product.findMany({});
  const customerList = await prisma.customer.findMany({});
  const collectionList = await prisma.collection.findMany({});
  const performanceList = await prisma.performance.findMany({});
  const packagingList = await prisma.packaging.findMany({});
  const propertyList = await prisma.property.findMany({});
  const invoiceList = JSON.parse(
    JSON.stringify(await prisma.invoice.findMany({}))
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
    },
  };
}
