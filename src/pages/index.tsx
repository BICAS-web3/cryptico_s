import { FC } from "react";
import s from "./styles.module.scss";
import Head from "next/head";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Cryptico</title>
      </Head>
      <h1>hello wolrd</h1>
    </>
  );
};

export default Home;
