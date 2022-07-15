import React from "react"
import Head from "next/head"
import { styled, useTheme } from "@mui/material/styles"
import Link from "../src/Link"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import Summary from "../src/components/resume/Summary"
import Experience from "../src/components/resume/Expertise"
import Technical from "../src/components/resume/Technical"
import Jobs from "../src/components/resume/Jobs"
import Education from "../src/components/resume/Education"
import Presentations from "../src/components/resume/Presentations"

const MainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "3em",
  },
}))

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "4.25rem",
  },
}))

const ResumeButton = styled(Button)(({ theme }) => ({
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
}))

export default function Resume() {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <MainContainer container direction="column">
      <Head>
        <title key="title">Résumé | Chris Diorio</title>
        <meta
          name="description"
          key="description"
          content="Learn more about Chris Diorio's work and education experience in his resume!"
        />
        <meta
          property="og:title"
          content="Résumé | Chris Diorio"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net/resume"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net/resume"
        />
      </Head>
      <Grid item md style={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Title variant="h1" align="center">
          Chris's Résumé
        </Title>
        <Grid item container style={{ marginBottom: "5em", marginTop: "2em" }}>
          <Grid item container justifyContent="center">
            <Grid item>
              <ResumeButton
                component={Link}
                href="/files/chris_diorio_resume.pdf"
                target="_blank"
                variant="contained"
              >
                Download my résumé (.pdf)
              </ResumeButton>
            </Grid>
          </Grid>
        </Grid>
        <Summary />
        <Experience />
        <Technical />
        <Jobs />
        <Education />
        <Presentations />
      </Grid>
    </MainContainer>
  )
}
