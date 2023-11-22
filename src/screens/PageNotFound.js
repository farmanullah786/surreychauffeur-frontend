import React from "react";
import AppLayout from "../components/applayout/AppLayout";
import { Link } from "react-router-dom";
const PageNotFoundMessage = () => {
  const style = {
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
    fontSize: "24px",
    margin: "15px 0",
  };
  return (
    <AppLayout>
      <p style={style}>Looks like, this page doesn’t exist.</p>
      <p style={style}>We are here to help.</p>
      <p style={style}>
        <Link to="/" style={{ color: "green" }}>
          Go to home page&gt;&gt;
        </Link>
      </p>
    </AppLayout>
  );
};

export default PageNotFoundMessage;
