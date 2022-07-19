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
import parse from "html-react-parser"

import awards from "../../../awards.json"

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

export default function Awards() {
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
        <Header variant="h2">Awards</Header>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginBottom: "2em", marginTop: "2em" }}
      >
        {awards.data.map((item, i) => {
          return (
            <Grid item key={`pst${item}${i}`}>
              <EduCard style={{ maxWidth: "35rem" }}>
                <CardMedia component="img" height="400" image={item.image} />
                <CardContent>
                  <Typography
                    component={"div"}
                    variant="h5"
                    style={{
                      fontWeight: "700",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography component={"div"} variant="h5" fontSize="1.2rem">
                    {parse(item.organization)}
                  </Typography>
                  <Typography component={"div"}>{item.date}</Typography>
                  <Typography component={"div"}>
                    {parse(item.description)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    component={Link}
                    href="/assets/rv_award.webp"
                    target="_blank"
                  >
                    Go To Award Certificate
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
