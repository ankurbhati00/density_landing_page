import * as React from "react";
import { Navbar } from "../components/navbar";
import { Header } from "../components/header";
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Header/>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
