import Head from "next/head";
import prisma from "../../prisma/prisma";
import Layout_Admin from "../../layouts/layout_admin";

export default function Admin() {
  return (
    <Layout_Admin>
      <Head>
        <title>
          Quadratik.fr - Les solutions acoustiques pour votre studio
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer>footer</footer>
    </Layout_Admin>
  );
}

export async function getServerSideProps(context) {
  const products = await prisma.product.findMany({});

  return {
    props: { products },
  };
}
