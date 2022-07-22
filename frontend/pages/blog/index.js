import React from "react"
import Articles from "../../src/components/blog/articles"
import { fetchAPI } from "../../lib/api"
import { styled, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { LazyLoadImage } from "react-lazy-load-image-component"

import Link from "../../src/Link"

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

const Blog = ({ articles }) => {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <MainContainer container direction="column">
      <Grid item md style={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Title variant="h1" align="center">
          Blog
        </Title>
        <Articles articles={articles} />
      </Grid>
    </MainContainer>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
  ])

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  }
}

export default Blog
