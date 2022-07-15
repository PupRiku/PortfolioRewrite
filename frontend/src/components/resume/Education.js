import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import edu from "../../../edu.json"

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

export default function Education() {
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
        <Header variant="h2">Education</Header>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginBottom: "2em", marginTop: "2em" }}
      >
        {edu.data.map((item, i) => (
          <Grid item key={`edu${item}${i}`}>
            <EduCard>
              <CardMedia component="img" height="200" image={item.image} />
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "700",
                    color: theme.palette.secondary.main,
                  }}
                >
                  {item.school}
                </Typography>
                <Typography variant="h5" fontSize="1.2rem">
                  {item.degree}
                </Typography>
                <Typography>{item.duration}</Typography>
                <Typography>{item.location}</Typography>
              </CardContent>
            </EduCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
