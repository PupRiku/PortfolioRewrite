import React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import Link from "../src/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function Blog() {
  return (
    <React.Fragment>
      <Head>
        <title key="title">A Look Into My Life - Blog | Chris Diorio</title>
      </Head>
      <Typography variant="h2">Blog</Typography>
    </React.Fragment>
  );
}
