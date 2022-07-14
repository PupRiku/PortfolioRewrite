import React from "react";
import Head from "next/head";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const MainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "3em",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "4.25rem",
  },
}));

const PhilosophyCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  boxShadow: theme.shadows[10],
  borderRadius: 15,
  maxWidth: 1000,
  backgroundColor: theme.palette.white.main,
  [theme.breakpoints.down("lg")]: {
    maxWidth: 800,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 500,
  },
}));

const PhilosophyInnerCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[10],
  borderRadius: 10,
  maxWidth: 265,
  backgroundColor: theme.palette.white.main,
  "&:hover": {
    backgroundColor: "#d2c7ff",
    WebkitTransition: "all .25s ease-in-out",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: 200,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 100,
  },
}));

const PhilosophyBackground = styled("div")({
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
});

const Media = styled(CardMedia)({
  height: 431,
  width: 451,
});

export default function Process() {
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer container direction="column">
      <Head>
        <title key="title">
          UX and Development Process and Philosophy | Chris Diorio
        </title>
        <meta
          name="description"
          key="description"
          content="Get a deeper dive into Chris Diorio's design process and philosophy when designing applications!"
        />
        <meta
          property="og:title"
          content="UX and Development Process and Philosophy | Chris Diorio"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net/process"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net/process"
        />
      </Head>
      <Title item style={{ marginBottom: matchesSM ? "2em" : "4em" }} md>
        <Typography variant="h1" align="center">
          Process & Philosophy
        </Typography>
      </Title>
      <Grid item>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "50rem" }}
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
                <Grid item style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                  <Typography align="center">
                    I am a user experience designer that enjoys thinking outside
                    the box for unique and engaging solutions. My philosophy to
                    user experience design includes the following points:
                  </Typography>
                </Grid>
                <Grid container direction="row">
                  <Grid item>
                    <PhilosophyInnerCard
                      raised="true"
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="There’s no such thing as a dumb question."
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I enjoy hearing other people’s stories and learning as
                          much as I can. You can't really learn unless you ask
                          and even the smallest question can give you more
                          information than some of the more obvious ones. So, I
                          don't hold back when asking for more detail.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                  <Grid item>
                    <PhilosophyInnerCard
                      raised="true"
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Celebrate success; Embrace failure."
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          We should all be happy when a project is successful,
                          but we shouldn't let failure deter us from our goal.
                          In fact, I have found that some of my biggest failures
                          helped make the product, and myself, even stronger.
                          I'm not afraid to fail and I'm more excited about what
                          I will learn.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                  <Grid item>
                    <PhilosophyInnerCard raised="true">
                      <CardHeader
                        title="You can’t spell functional without “fun”."
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I'm a very outgoing person who doesn't try to take
                          life too seriously. I feel by injecting a little bit
                          of that into my work makes the user experience even
                          more enjoyable. So, why not have a little fun with
                          your design; it doesn't have to be all business all
                          the time.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </PhilosophyCard>
          <PhilosophyBackground
            style={{
              backgroundImage: `url('/assets/philosophyBackground.webp')`,
            }}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100em" }}
        >
          <PhilosophyCard>
            <CardHeader
              title="My Process"
              style={{
                textAlign: "center",
                paddingLeft: 0,
                paddingRight: 0,
              }}
              titleTypographyProps={{ variant: "h2" }}
            />
            <Grid item container justifyContent="center">
              <Media
                image="/assets/process.webp"
                title="Graph defining the design process"
              />
            </Grid>
            <CardContent
              style={{
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Grid
                item
                container
                style={{
                  paddingLeft: matchesSM ? "1em" : "5em",
                  paddingRight: matchesSM ? "1em" : "5em",
                }}
              >
                <Grid container direction="row">
                  <Grid item>
                    <PhilosophyInnerCard
                      raised="true"
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Research"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I am driven by other people’s excitement for a product
                          or feature. Additionally, I love to hear people’s
                          stories and what their likes, ambitions, and ideas
                          are. My process always begins with user research. This
                          includes user interviews and surveys to gauge the
                          potential user’s current frustrations, inspirations,
                          and needs for a system.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                  <Grid item>
                    <PhilosophyInnerCard
                      raised="true"
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Define"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          From my research, I can narrow down and define the
                          problem. Part of this process includes creating user
                          personas based off of the data I collected. I also use
                          these personas to create journey maps and storyboards
                          for both the current and ideal process.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                  <Grid item>
                    <PhilosophyInnerCard raised="true">
                      <CardHeader
                        title="Design"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          We live in a digitized world, but my design process
                          always begins with trusty pencil and paper sketches.
                          Those sketches are then converted digitally. These
                          become lo-fi designs and prototypes (currently
                          utilizing Adobe XD) which allows for initial testing
                          with users. These designs are iterated on for fidelity
                          until a proper look and feel is reached.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                </Grid>
                <Grid container direction="row" style={{ marginTop: "1em" }}>
                  <Grid item>
                    <PhilosophyInnerCard
                      raised="true"
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Test"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          This is where I find one of the most important parts
                          in my process. Now it’s time to get what I designed
                          into hands of potential users. My preference is for my
                          testing to be in-person, as I feel the emotional
                          reactions I get from user tests can be even more
                          useful than any usage data or survey responses. I aim
                          for diversity in my testers, from different
                          backgrounds and experiences. The results from my
                          testing will help inform any design changes and
                          adjustments in direction.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                  <Grid item>
                    <PhilosophyInnerCard
                      raised="true"
                      style={{ marginRight: "1em" }}
                    >
                      <CardHeader
                        title="Launch"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          While many see the launch of a product see it as
                          “done”, I never do. The launch of a product for me
                          gets even more test data to use to continue to iterate
                          and improve the product further.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                  <Grid item>
                    <PhilosophyInnerCard raised="true">
                      <CardHeader
                        title="Iterate"
                        style={{
                          textAlign: "center",
                          paddingLeft: 5,
                          paddingRight: 5,
                        }}
                        titleTypographyProps={{ variant: "h3" }}
                      />
                      <CardContent>
                        <Typography>
                          I am always open to suggestions, improvements, and
                          recommendations, so my designs are always evolving. My
                          test results continue to inform designs and I’m never
                          “done” with a project. I continue to return to the
                          design step with new data and ideas to improve my work
                          even further constantly.
                        </Typography>
                      </CardContent>
                    </PhilosophyInnerCard>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </PhilosophyCard>
          <LazyLoadComponent threshold={900}>
            <PhilosophyBackground
              style={{
                backgroundImage: `url('/assets/processBackground.webp')`,
              }}
            />
          </LazyLoadComponent>
        </Grid>
      </Grid>
    </MainContainer>
  );
}
