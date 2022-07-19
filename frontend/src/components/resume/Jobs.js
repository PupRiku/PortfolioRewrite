import React, { useEffect } from "react"
import { styled, useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"

import Job from "./job"
import exp from "../../../exp.json"

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

export default function Jobs({ jobs }) {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  const chronoJobs = [...jobs].sort((a, b) => parseInt(b.id) - parseInt(a.id))

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
        {chronoJobs.map((job, i) => (
          <Job
            key={`job${i}`}
            company={job.attributes.company}
            location={job.attributes.location}
            title={job.attributes.title}
            duration={job.attributes.duration}
            description={job.attributes.description}
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
