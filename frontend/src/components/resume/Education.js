import React from "react"
import Head from "next/head"
import { styled, useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import Divider from "@mui/material/Divider"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function Education() {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  return <div>Edu</div>
}
