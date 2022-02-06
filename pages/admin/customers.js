import Head from "next/head";
import prisma from "../../prisma/prisma";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
  Button,
  Modal,
} from "react-bootstrap";

export default function Customer(customer) {
  return (
    <div className="container">
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer>footer</footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const customer = await prisma.customer.findMany({});
  console.log(customer);
  return {
    props: { customer },
  };
}
