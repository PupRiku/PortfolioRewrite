import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"

import Job from "./job"
import jobs from "../../../jobs.json"
import exp from "../../../exp.json"

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

export default function Jobs() {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item>
          <Header variant="h2">Experience Highlights</Header>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        {jobs.jobs.map((job, i) => (
          <Job
            key={`job${i}`}
            company={job.company}
            location={job.location}
            title={job.title}
            duration={job.duration}
            description={job.description}
          />
        ))}
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item>
          <Header variant="h2">Additional Experience</Header>
        </Grid>
      </Grid>
      {exp.exp.map((item, i) => (
        <Grid
          item
          container
          key={`xp${i}`}
          alignItems="center"
          style={{ marginBottom: "2em" }}
          direction="column"
        >
          <Grid item>
            <Typography variant="h4" component={"span"}>
              {item.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" component={"span"}>
              {item.location}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
}
