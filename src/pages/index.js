import * as React from "react";
import '../styles/index.module.css';


import { Navbar } from "../components/navbar";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer/>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
