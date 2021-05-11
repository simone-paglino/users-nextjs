import React, { useState } from "react";
// Material UI
import { Alert, AlertTitle } from "@material-ui/lab";
// API
import { useQuery } from "../api";
// Components
import Dialog from "../components/modules/Dialog/Dialog";
// Style
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const { loading, response, error, getData } = useQuery();

  return (
    <>
      <Component {...pageProps} getData={getData} error={error} />
      {error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      ) : loading ? (
        <Dialog isOpen={loading}>
          <Alert severity="info">Loading data...</Alert>
        </Dialog>
      ) : null}
    </>
  );
}
