import * as React from "react";
import { Navbar } from "../components/navbar";
import { Header } from "../components/header";
import { Main } from "../components/main";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main/>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
