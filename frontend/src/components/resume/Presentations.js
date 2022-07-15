import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Link from "../../Link"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import parse, { domToReact } from "html-react-parser"

import present from "../../../present.json"

const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) {
      return
    }

    if (attribs.class === "subtitle") {
      return (
        <span style={{ fontSize: "1.15rem" }}>
          {domToReact(children, options)}
        </span>
      )
    }
  },
}

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const EduCard = styled(Card)(({ theme }) => ({
  minWidth: "35em",
  marginLeft: "1em",
  marginRight: "1em",
  boxShadow: theme.shadows[10],
  backgroundColor: theme.palette.white.main,
}))

export default function Presentations() {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid
      item
      container
      justifyContent="center"
      style={{ marginBottom: "2em" }}
    >
      <Grid item>
        <Header variant="h2">Presentations</Header>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginBottom: "2em", marginTop: "2em" }}
      >
        {present.data.map((item, i) => {
          return (
            <Grid item key={`pst${item}${i}`}>
              <EduCard>
                <CardMedia component="img" height="300" image={item.image} />
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {parse(item.title, options)}
                  </Typography>
                  <Typography variant="h5" fontSize="1.2rem">
                    NODA Annual Conference | Houston, TX
                  </Typography>
                  <Typography>October 2019</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    component={Link}
                    href="/files/slides_gps.pdf"
                    target="_blank"
                  >
                    Go To Slides
                  </Button>
                </CardActions>
              </EduCard>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
