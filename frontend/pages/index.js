import React, { useState } from "react";
import Head from "next/head";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

import Link from "../src/Link";
import theme from "../src/theme";

const MainContainer = styled(Grid)({
  [theme.breakpoints.down("sm")]: {
    marginTop: "3em",
  },
});
const HeroTextContainer = styled(Grid)(({ theme }) => ({
  minWidth: "21.5em",
  marginLeft: "4em",
  marginRight: "1em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway",
  fontWeight: 700,
  fontSize: "2.25em",
  color: theme.palette.primary.main,
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.75em",
  },
}));

const HeroImage = styled(LazyLoadImage)(({ theme }) => ({
  marginLeft: 0,
  borderRadius: 30,
  boxShadow: theme.shadows[10],
}));

const IntroText = styled(Typography)({
  fontSize: "1.25em",
  fontWeight: 300,
});

const PhilosophyBackground = styled("div")({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
});

const PhilosophyCard = styled(Card)(({ theme }) => ({
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
}));

const PhilosophyButton = styled(Button)(({ theme }) => ({
  marginTop: "2em",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
  textTransform: "none",
  borderRadius: 50,
  fontFamily: "Roboto",
  fontWeight: "bold",
  height: 35,
  padding: 10,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

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

const PortfolioButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
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
}));

const GreyImage = styled(Grid)(({ theme }) => ({
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
}));

const TitleContainer = styled(Grid)({
  marginBottom: "10em",
});

const Highlight = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
}));

export default function Index(props) {
  const theme = useTheme();
  const [aboutHover, setAboutHover] = useState(false);
  const [lifeHover, setLifeHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer container direction="column">
      <Head>
        <title key="title">
          Chris Diorio - UX Designer and Front-End Developer
        </title>
        <meta
          name="description"
          key="description"
          content="Welcome to the website for Chris Diorio's portfolio, resumé, and more. Learn more about his philosophy and process and get in contact with him!"
        />
        <meta
          property="og:title"
          content="Chris Diorio - UX Designer and Front-End Developer"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net"
        />
      </Head>
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction={matchesMD ? "column" : "row"}
        >
          <HeroTextContainer
            item
            md={6}
            ml={matchesSM ? 0 : undefined}
            mr={matchesSM ? 0 : undefined}
          >
            {matchesMD ? (
              <Grid container justifyContent="center">
                <Grid item>
                  <HeroImage
                    src="/assets/Chris.webp"
                    width={matchesMD ? 225 : matchesXS ? 200 : 300}
                    height={matchesMD ? 263 : matchesXS ? 234 : 351}
                  />
                </Grid>
              </Grid>
            ) : null}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <HeroText align={matchesMD ? "center" : "right"}>
                  User Experience Designer.
                  <br />
                  Front-End Developer.
                  <br />
                  All-Around Nerd.
                </HeroText>
              </Grid>
            </Grid>
          </HeroTextContainer>
          {!matchesMD ? (
            <Grid item md>
              <HeroImage
                src="/assets/Chris.webp"
                width={matchesMD ? 225 : matchesXS ? 200 : 300}
                height={matchesMD ? 263 : matchesXS ? 234 : 351}
              />
            </Grid>
          ) : null}
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "2em" }}
        >
          <Grid item sx={{ maxWidth: 750 }}>
            <IntroText align="center">
              Hello! My name is <Highlight>Chris Diorio</Highlight> and welcome
              to my website! Feel free to take a look around, learn more about
              me, check out what I've made, and get in touch for opportunities
              large and small.
            </IntroText>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        sx={{ marginBottom: "5em", marginTop: "5em" }}
      >
        <Grid item container justifyContent="center">
          <Grid item>
            <PortfolioButton
              component={Link}
              href="/portfolio"
              variant="contained"
            >
              See my entire portfolio
            </PortfolioButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          style={{ height: "35em" }}
          alignItems="center"
          justifyContent="center"
        >
          <PhilosophyCard>
            <CardHeader
              title="My Philosophy"
              style={{
                textAlign: "center",
                paddingLeft: 0,
                paddingRight: 0,
              }}
              titleTypographyProps={{ variant: "h2" }}
            />
            <CardContent
              style={{
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Grid item container justifyContent="center">
                <Grid item>
                  <Typography variant="subtitle1" align="center">
                    “Ambition is not what one would do, but what one does, for
                    ambition without action is fantasy.”
                  </Typography>
                </Grid>
              </Grid>
              <br />
              <Grid
                item
                container
                style={{
                  paddingLeft: matchesSM ? "1em" : "5em",
                  paddingRight: matchesSM ? "1em" : "5em",
                }}
              >
                <Grid item>
                  <Typography align="center">
                    When it comes to most ambitions, this quote falls true.
                    However, what about those of us whose ambition is fantasy?
                    For me, this is who I am. I am a designer who lives in
                    fantasy. Whether it is the graphical designs I produce, the
                    characters I portray on stage, or the stories I envision in
                    games, fantasy is my reality.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item>
                  <PhilosophyButton
                    component={Link}
                    href="/process"
                    variant="contained"
                  >
                    Learn more about my philosophy and process
                  </PhilosophyButton>
                </Grid>
              </Grid>
            </CardContent>
          </PhilosophyCard>
          <LazyLoadComponent visibleByDefault="true">
            <PhilosophyBackground
              style={{
                backgroundImage: `url('/assets/philosophyBackground.webp')`,
              }}
            />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <Grid
          container
          sx={{
            marginTop: "5em",
            marginBottom: "2em",
            maxWidth: matchesXS ? 300 : matchesSM ? 525 : 900,
          }}
        >
          <GreyImage item>
            <Button
              style={{ padding: 0 }}
              component={Link}
              href="/about"
              disableRipple
              onMouseOver={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              <LazyLoadImage
                src="/assets/hearNoEvil.webp"
                width={matchesXS ? 100 : matchesSM ? 175 : 300}
                height={matchesXS ? 133 : matchesSM ? 233 : 400}
              />
            </Button>
          </GreyImage>
          <GreyImage item>
            <Button
              style={{ padding: 0 }}
              component={Link}
              href="/life"
              disableRipple
              onMouseOver={() => setLifeHover(true)}
              onMouseLeave={() => setLifeHover(false)}
            >
              <LazyLoadImage
                src="/assets/seeNoEvil.webp"
                width={matchesXS ? 100 : matchesSM ? 175 : 300}
                height={matchesXS ? 133 : matchesSM ? 233 : 400}
              />
            </Button>
          </GreyImage>
          <GreyImage item>
            <Button
              style={{ padding: 0 }}
              component={Link}
              href="/contact"
              disableRipple
              onMouseOver={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              <LazyLoadImage
                src="/assets/speakNoEvil.webp"
                width={matchesXS ? 100 : matchesSM ? 175 : 300}
                height={matchesXS ? 133 : matchesSM ? 233 : 400}
              />
            </Button>
          </GreyImage>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center">
        <TitleContainer
          container
          sx={{ width: matchesXS ? 300 : matchesSM ? 525 : 900 }}
        >
          <Grid item xs={4}>
            <Typography
              variant={aboutHover ? "h3" : "subtitle1"}
              align="center"
            >
              About Me
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={lifeHover ? "h3" : "subtitle1"} align="center">
              My Life
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant={contactHover ? "h3" : "subtitle1"}
              align="center"
            >
              Contact Me
            </Typography>
          </Grid>
        </TitleContainer>
      </Grid>
    </MainContainer>
  );
}
