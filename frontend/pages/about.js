import React from "react";
import Head from "next/head";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Link from "../src/Link";
import theme from "../src/theme";

const MainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "3em",
  },
}));
const HeroImage = styled(LazyLoadImage)(({ theme }) => ({
  marginLeft: 0,
  borderRadius: 30,
  boxShadow: theme.shadows[10],
}));
const InlineLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontWeight: 400,
  WebkitTransition: "all .1s ease-in-out",
  "&:hover": {
    color: theme.palette.secondary.main,
    fontWeight: 700,
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "4.25rem",
  },
}));

export default function About() {
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer container direction="column">
      <Head>
        <title key="title">About Me | Chris Diorio</title>
        <meta
          name="description"
          key="description"
          content="Learn more about Chris Diorio and learn more about what brought him to User Experience Design and Application Development!"
        />
        <meta
          property="og:title"
          content="About Me | Chris Diorio"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net/about"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net/about"
        />
      </Head>
      <Grid item md sx={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Title variant="h1" align="center">
          About Chris
        </Title>
      </Grid>
      <Grid item style={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item>
            <Grid container justifyContent="center">
              <Grid
                item
                sm
                container
                justifyContent="center"
                style={{
                  flexGrow: 0,
                  marginBottom: matchesSM ? "1em" : undefined,
                }}
              >
                <Grid item>
                  <HeroImage
                    src="/assets/family.webp"
                    alt="Chris and his family on a lake terrace"
                    width={matchesMD ? 300 : matchesXS ? 200 : 400}
                    height={matchesMD ? 225 : matchesXS ? 150 : 300}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  marginLeft: matchesSM ? 0 : matchesMD ? "3em" : "5em",
                }}
              >
                <Grid container direction="column">
                  <Grid item style={{ marginBottom: "1em" }}>
                    <Typography
                      variant="h2"
                      align={matchesSM ? "center" : undefined}
                      style={{ fontSize: matchesXS ? "1.75rem" : undefined }}
                    >
                      From East Coast to Midwest
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginBottom: "1em" }}>
                    <Typography variant="body1">
                      I grew up in the New York City area, on Staten Island, for
                      18 years. After graduating from Rensselaer Polytechnic
                      Institute in Troy, NY, I worked in Albany, and then
                      eventually made my way to Madison, WI. While I originally
                      moved here to work in video game development, I realized
                      that that industry wasn't for me. I soon moved to working
                      at the University of Wisconsin - Madison, working as an
                      Application Administrator for their Center for the
                      First-Year Experience.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      This change in career reawakend my joy in designing and
                      developing applications. I entered game design for giving
                      an enjoyable experience to others, but I quickly learned
                      that there are a multitude of mediums to deliver these
                      kind of experiences. Career changes are scary, but I feel
                      this change will be great for me in the end.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item>
            <Grid container justifyContent="center">
              <Grid
                item
                sm
                container
                justifyContent="center"
                style={{
                  flexGrow: 0,
                  marginBottom: matchesSM ? "1em" : undefined,
                }}
              >
                {matchesMD ? (
                  <Grid item>
                    <HeroImage
                      src="/assets/queerShortsProfile.webp"
                      alt="Chris sitting on the floor in front of a theater backdrop"
                      width={matchesMD ? 225 : matchesXS ? 150 : 300}
                      height={matchesMD ? 225 : matchesXS ? 150 : 300}
                    />
                  </Grid>
                ) : null}
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  marginRight: matchesSM ? 0 : matchesMD ? "3em" : "5em",
                }}
              >
                <Grid container direction="column">
                  <Grid item style={{ marginBottom: "1em" }}>
                    <Typography
                      variant="h2"
                      align={matchesSM ? "center" : undefined}
                      style={{ fontSize: matchesXS ? "1.75rem" : undefined }}
                    >
                      All Work And No Play...
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginBottom: "1em" }}>
                    <Typography variant="body1">
                      Outside of work and design, my hobbies include theater and
                      gaming. I???ve been involved in theater since high school
                      and have loved it ever since. I???ve taken on many roles
                      both on and off stage, but my most common role has been
                      that of the Stage Manager. It???s been a great escape and my
                      experiences are what have led to my Madison Audition Hub
                      project.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      I???m also enjoy games, including video games, table-top and
                      board games, and online social strategy games. I???m a huge
                      fan of Dungeons and Dragons and enjoy the story crafting
                      that comes with it. I enjoy the strategy and escape from
                      reality they give, along with the connection between
                      people they can give.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {!matchesMD ? (
                <Grid
                  item
                  sm
                  container
                  justifyContent="center"
                  style={{
                    flexGrow: 0,
                    marginBottom: matchesSM ? "1em" : undefined,
                  }}
                >
                  <Grid item>
                    <HeroImage
                      src="/assets/queerShortsProfile.webp"
                      alt="Chris sitting on the floor in front of a theater backdrop"
                      width={matchesMD ? 225 : matchesXS ? 150 : 300}
                      height={matchesMD ? 225 : matchesXS ? 150 : 300}
                    />
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginBottom: "4em" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item>
            <Grid container justifyContent="center">
              <Grid
                item
                sm
                container
                justifyContent="center"
                style={{
                  flexGrow: 0,
                  marginBottom: matchesSM ? "1em" : undefined,
                }}
              >
                <Grid item>
                  <HeroImage
                    src="/assets/coffee.webp"
                    alt="Chris looking cross-eyed at a cup of coffee"
                    width={matchesMD ? 168.75 : matchesXS ? 112.5 : 225}
                    height={matchesMD ? 225 : matchesXS ? 150 : 300}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  marginLeft: matchesSM ? 0 : matchesMD ? "3em" : "5em",
                }}
              >
                <Grid container direction="column">
                  <Grid item style={{ marginBottom: "1em" }}>
                    <Typography
                      variant="h2"
                      align={matchesSM ? "center" : undefined}
                      style={{ fontSize: matchesXS ? "1.75rem" : undefined }}
                    >
                      So, What's Next?
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginBottom: "1em" }}>
                    <Typography variant="body1">
                      Honestly, anything! I'm constantly coming up with ideas of
                      what I want to design or try out, whether for a client, a
                      friend, or a personal project for practice. I am the kind
                      of person always up for a challenge and am always looking
                      for ways to get my hands dirty.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      I'm going to be using my{" "}
                      <InlineLink href="/blog">blog</InlineLink> as a way to
                      document my ideas and process as I work on more projects.
                      Hopefully, some, or even all of them, will become part of
                      my <InlineLink href="/portfolio">portfolio</InlineLink>.
                      Don't hesitate to{" "}
                      <InlineLink href="/contact">reach out to me</InlineLink>{" "}
                      with ideas, questions, or projects that I can help make a
                      reality.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainContainer>
  );
}
