import React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import Link from "../src/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function Experience() {
  return (
    <Grid container>
      <Head>
        <title key="title">
          Work Experience, Project Portfolio, and Presentaions | Chris Diorio
        </title>
      </Head>
      <p>Portfolio & Resume</p>
    </Grid>
  );
}
