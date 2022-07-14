import React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import Link from "../src/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function Theater() {
  return (
    <Grid container>
      <Head>
        <title key="title">
          UX and Development Process and Philosophy | Chris Diorio
        </title>
      </Head>
      <p>Process</p>
    </Grid>
  );
}
