import React from "react";
import { Helmet } from "react-helmet-async";
const Repo = () => {
  return (
    <>
      <Helmet>
        <title>Repo</title>
        <meta name="description" content="The individual repo" />
        <link rel="canonical" href="/repos/repo" />
      </Helmet>
      <p>repo</p>
    </>
  );
};

export default Repo;