import React from "react";
import Head from "next/head";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";

import Link from "../src/Link";
import theme from "../src/theme";

const mainContainer = {
  [theme.breakpoints.down("sm")]: {
    marginTop: "3em",
  },
};
const heroTextContainer = {
  minWidth: "21.5em",
  marginLeft: "4em",
  marginRight: "1em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
};

const heroText = {
  fontFamily: "Raleway",
  fontWeight: 700,
  fontSize: "2.25em",
  color: theme.palette.common.orange,
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.75em",
  },
};

const heroImage = {
  marginLeft: 0,
  borderRadius: 30,
  boxShadow: theme.shadows[10],
};

const introText = {
  fontSize: "1.25em",
  fontWeight: 300,
};

const philosophyBackground = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const philosophyCard = {
  position: "absolute",
  boxShadow: theme.shadows[10],
  borderRadius: 15,
  maxWidth: 1000,
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("lg")]: {
    maxWidth: 800,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 500,
  },
};

const philosophyText = {
  color: theme.palette.common.white,
  fontSize: "1.25em",
  fontWeight: 300,
};

const philosophyButton = {
  marginTop: "2em",
  backgroundColor: theme.palette.common.orange,
  color: theme.palette.common.white,
  textTransform: "none",
  borderRadius: 50,
  fontFamily: "Roboto",
  fontWeight: "bold",
  height: 35,
  padding: 10,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
};

const portfolioArrows = {
  backgroundColor: theme.palette.common.orange,
  color: theme.palette.common.white,
  borderRadius: 10,
  padding: "14px 14px",
  marginLeft: "2em",
  marginRight: "2em",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
};

const portfolioButton = {
  backgroundColor: theme.palette.common.orange,
  color: theme.palette.common.white,
  textTransform: "none",
  borderRadius: 50,
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "1.1rem",
  paddingLeft: 25,
  paddingRight: 25,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
};

const greyImage = {
  filter: "gray",
  WebkitFilter: "grayscale(1)",
  WebkitTransition: "all .5s ease-in-out",
  zIndex: "auto",
  "&:hover": {
    filter: "none",
    zIndex: 10,
    WebkitFilter: "grayscale(0)",
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
};

const titleContainer = {
  marginBottom: "10em",
};

const highlight = {
  color: theme.palette.common.purple,
  fontWeight: 700,
};

export default function Index() {
  return <div>Hello!</div>;
}
