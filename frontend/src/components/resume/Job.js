import React from "react"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import parse from "html-react-parser"

export default function Job({
  company,
  location,
  title,
  duration,
  description,
}) {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid item style={{ marginBottom: "2em" }}>
      <Accordion
        sx={{
          backgroundColor: theme.palette.white.main,
          boxShadow: theme.shadows[10],
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="exp1-content"
          id="exp1-header"
        >
          <Typography
            component={"div"}
            variant="h4"
            style={{ width: "20em", flexShrink: 0, margin: "auto" }}
          >
            {company}
            <br />
            {location}
          </Typography>
          <Typography
            component={"div"}
            variant="h4"
            align="center"
            style={{ width: "30em", flexShrink: 0, margin: "auto" }}
          >
            {parse(title)}
          </Typography>
          <Typography
            component={"div"}
            variant="h4"
            align="right"
            style={{
              width: "20em",
              flexShrink: 0,
              margin: "auto 1em auto auto",
            }}
          >
            {parse(duration)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            component={"div"}
            variant="body1"
            style={{ maxWidth: "90em", margin: "auto" }}
          >
            {parse(description)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}
