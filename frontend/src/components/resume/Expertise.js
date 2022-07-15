import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const ExpertiseItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  boxShadow: theme.shadows[10],
  padding: theme.spacing(3),
  textAlign: "center",
  backgroundColor: theme.palette.white.main,
  minWidth: 245,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    fontWeight: 700,
  },
}))

export default function Experience() {
  const theme = useTheme()

  return (
    <>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item>
          <Header variant="h2">Areas of Expertise</Header>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          style={{ marginBottom: "1.5em" }}
        >
          <Stack
            direction="row"
            spacing={4}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ExpertiseItem>Project Management</ExpertiseItem>
            <ExpertiseItem>UX Design</ExpertiseItem>
            <ExpertiseItem>Accessibility Testing</ExpertiseItem>
          </Stack>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          style={{ marginBottom: "1.5em" }}
        >
          <Stack
            direction="row"
            spacing={4}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ExpertiseItem>Persona & Scenario Development</ExpertiseItem>
            <ExpertiseItem>User Research</ExpertiseItem>
            <ExpertiseItem>Prototyping</ExpertiseItem>
          </Stack>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <Stack
            direction="row"
            spacing={4}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ExpertiseItem>Storyboards & Wireframes</ExpertiseItem>
            <ExpertiseItem>Usability Testing</ExpertiseItem>
            <ExpertiseItem>QA Testing</ExpertiseItem>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
