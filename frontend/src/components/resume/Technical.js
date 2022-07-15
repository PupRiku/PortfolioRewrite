import React from "react"
import { styled, useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"
import Divider from "@mui/material/Divider"

const Header = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const Apps = styled("img")({
  width: 100,
  height: 100,
})

export default function Technical() {
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
          <Header variant="h2">Technical Proficiencies</Header>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item>
          <Typography variant="h3">Programming & Scripting</Typography>
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
            <Tooltip title="HTML 5" arrow>
              <Apps src="assets/HTML5.svg" alt="html5 logo" />
            </Tooltip>
            <Tooltip title="CSS 3" arrow>
              <Apps src="assets/CSS3_logo.svg" alt="css3 logo" />
            </Tooltip>
            <Tooltip title="Javascript" arrow>
              <Apps src="assets/javascript.svg" alt="javascript logo" />
            </Tooltip>
            <Tooltip title="Python" arrow>
              <Apps src="assets/Python-logo.svg" alt="python logo" />
            </Tooltip>
            <Tooltip title="React" arrow>
              <Apps src="assets/reactjs-icon.svg" alt="react js logo" />
            </Tooltip>
            <Tooltip title="Next.js" arrow>
              <Apps src="assets/next-js.svg" alt="next js logo" />
            </Tooltip>
            <Tooltip title="Gatsby" arrow>
              <Apps src="assets/Gatsby.svg" alt="gatsby logo" />
            </Tooltip>
            <Tooltip title="Strapi" arrow>
              <Apps src="assets/strapi.svg" alt="strapi logo" />
            </Tooltip>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item>
          <Typography variant="h3">Tools</Typography>
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
            <Tooltip title="Figma" arrow>
              <Apps src="/assets/Figma-logo.svg" alt="figma logo" />
            </Tooltip>
            <Tooltip title="Adobe XD" arrow>
              <Apps src="assets/adobexd.svg" alt="adobe xd logo" />
            </Tooltip>
            <Tooltip title="Adobe InDesign" arrow>
              <Apps src="assets/indesign.svg" alt="adobe indesign logo" />
            </Tooltip>
            <Tooltip title="InVision" arrow>
              <Apps src="assets/invision.svg" alt="invision logo" />
            </Tooltip>
            <Tooltip title="Mural" arrow>
              <Apps src="/assets/muralco-icon.svg" alt="mural logo" />
            </Tooltip>
            <Tooltip title="Git" arrow>
              <Apps src="/assets/git.svg" alt="git logo" />
            </Tooltip>
            <Tooltip title="GitHub" arrow>
              <Apps src="/assets/github-icon.svg" alt="github logo" />
            </Tooltip>
            <Tooltip title="Visual Studio Code" arrow>
              <Apps src="/assets/vscode.svg" alt="visual studio code logo" />
            </Tooltip>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
