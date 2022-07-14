import React from "react";
import Link from "../Link";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

const Adornment = styled("svg")(({ theme }) => ({
  width: "33em",
  verticalAlign: "bottom",
  [theme.breakpoints.down("lg")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}));

const MainContainer = styled(Grid)({
  position: "absolute",
});

const StyledLink = styled(Grid)({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
});

const GridItem = styled(Grid)({
  marginLeft: "3em",
  marginTop: "3em",
});

export default function Footer({
  value,
  setValue,
  lifeIndex,
  setLifeIndex,
  experienceIndex,
  setExperienceIndex,
}) {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StyledFooter>
      {matchesLG ? (
        <MainContainer container justifyContent="center">
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={Link}
                href="/"
                onClick={() => setValue(0)}
              >
                Home
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={Link}
                href="/about"
                onClick={() => setValue(1)}
              >
                About Me
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={Link}
                href="/process"
                onClick={() => setValue(2)}
              >
                My Process
              </StyledLink>
              <StyledLink
                item
                component={Link}
                href="/process"
                onClick={() => setValue(2)}
              >
                Philosophy
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={Link}
                href="/experience"
                onClick={() => setValue(3)}
              >
                My Experience
              </StyledLink>
              <StyledLink
                item
                component={Link}
                href="/resume"
                onClick={() => {
                  setValue(3);
                  setExperienceIndex(0);
                }}
              >
                Résumé
              </StyledLink>
              <StyledLink
                item
                component={Link}
                href="/portfolio"
                onClick={() => {
                  setValue(3);
                  setExperienceIndex(1);
                }}
              >
                Project Portfolio
              </StyledLink>
              <StyledLink
                item
                component={Link}
                href="/presentations"
                onClick={() => {
                  setValue(3);
                  setExperienceIndex(2);
                }}
              >
                Presentations
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={Link}
                href="/experience"
                onClick={() => setValue(4)}
              >
                My Life
              </StyledLink>
              <StyledLink
                item
                component={Link}
                href="/resume"
                onClick={() => {
                  setValue(4);
                  setLifeIndex(0);
                }}
              >
                Theater Work
              </StyledLink>
              <StyledLink
                item
                component={Link}
                href="/portfolio"
                onClick={() => {
                  setValue(4);
                  setLifeIndex(1);
                }}
              >
                Blog
              </StyledLink>
            </Grid>
          </GridItem>
          <GridItem item>
            <Grid container direction="column" spacing={2} m={0}>
              <StyledLink
                item
                component={Link}
                href="/contact"
                onClick={() => setValue(5)}
              >
                Contact Me
              </StyledLink>
            </Grid>
          </GridItem>
        </MainContainer>
      ) : null}
      <Adornment
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1536.19 662.26"
      >
        <title>footerAdornment</title>
        <g>
          <path
            d="M277,346q-512.74,0-1025.5.09c-3.75,0-4.6-.84-4.59-4.59q.15-326.5,0-653c0-3.75.84-4.59,4.59-4.59q729.75.15,1459.5.09-26.14,39.87-52.3,79.75Q605.14-154.62,551.54-73L402.74,153.72q-48,73.1-96,146.19C296.76,315.21,286.3,330.23,277,346Z"
            transform="translate(753.09 316.16)"
            style={{ fill: "#40356f" }}
          />
          <path
            d="M783-314q-19.75,30-39.49,60.08Q668.11-138.49,592.75-23,530.89,71.72,469.08,166.5L352,346H277c9.3-15.77,19.76-30.79,29.78-46.09q47.89-73.14,96-146.19L551.54-73q53.58-81.63,107.16-163.26Q684.88-276.12,711-316q34.5,0,69,0C781.27-316,783.61-317.09,783-314Z"
            transform="translate(753.09 316.16)"
            style={{ fill: "#69e8f4" }}
          />
        </g>
      </Adornment>
    </StyledFooter>
  );
}
