import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const SummaryCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  boxShadow: theme.shadows[10],
  borderRadius: 15,
  maxWidth: 1300,
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("lg")]: {
    maxWidth: 800,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 500,
  },
}))

const Highlight = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
}))

export default function Summary() {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid
      item
      container
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "5em", marginBottom: "5em" }}
    >
      <SummaryCard>
        <CardContent style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Grid
            item
            container
            style={{
              paddingLeft: matchesSM ? "1em" : "3em",
              paddingRight: matchesSM ? "1em" : "3em",
            }}
          >
            <Grid item>
              <Typography variant="body1" align="center">
                Goal driven and ambitious <Highlight>UX Design</Highlight>{" "}
                professional with extensive experience across{" "}
                <Highlight>QA</Highlight> and{" "}
                <Highlight>usability testing</Highlight>. Dynamic leader with a
                track record in developing and directing{" "}
                <Highlight>high-performing</Highlight> teams to drive{" "}
                <Highlight>innovation</Highlight> using creative methods.
                Compelling communicator well versed in{" "}
                <Highlight>
                  engaging key stakeholders, collaborating cross-functionally,
                  and coaching junior members
                </Highlight>
                . Strong aptitude for leveraging{" "}
                <Highlight>innovative thinking</Highlight> across various
                projects while driving{" "}
                <Highlight>user-focused experiences</Highlight>.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </SummaryCard>
    </Grid>
  )
}
