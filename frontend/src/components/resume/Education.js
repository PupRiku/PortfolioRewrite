import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { getStrapiMedia } from "../../../lib/media"

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

export default function Education({ edus }) {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  const chronoEdus = [...edus].sort((a, b) => parseInt(b.id) - parseInt(a.id))

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
        {chronoEdus.map((edu, i) => (
          <Grid item key={`edu${edu}${i}`}>
            <EduCard>
              <CardMedia
                component="img"
                height="200"
                image={getStrapiMedia(edu.attributes.image)}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "700",
                    color: theme.palette.secondary.main,
                  }}
                >
                  {edu.attributes.school}
                </Typography>
                <Typography variant="h5" fontSize="1.2rem">
                  {edu.attributes.degree}
                </Typography>
                <Typography>{edu.attributes.duration}</Typography>
                <Typography>{edu.attributes.location}</Typography>
              </CardContent>
            </EduCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
