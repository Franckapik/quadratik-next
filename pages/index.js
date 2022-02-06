import Head from "next/head";
import prisma from "../prisma/prisma";

export default function Home() {
  return (
    <div className="container">
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await prisma.product.findMany({});

  console.log(products);

  return {
    props: { products },
  };
}
