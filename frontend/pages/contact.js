import React, { useState } from "react"
import axios from "axios"
import Head from "next/head"
import { useTheme, styled } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import CircularProgress from "@mui/material/CircularProgress"
import Snackbar from "@mui/material/Snackbar"

import SendIcon from "@mui/icons-material/Send"

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "4.25rem",
  },
}))

const StyledTextField = styled(TextField)({
  width: "30rem",
  marginBottom: "1rem",
})

export default function Contact() {
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"))

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [emailHelper, setEmailHelper] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  })

  const onChange = (event) => {
    let valid

    switch (event.target.id) {
      case "email":
        setValues({ ...values, email: event.target.value })
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        )

        if (!valid) {
          setEmailHelper("Invalid email")
        } else {
          setEmailHelper("")
        }
        break
      default:
        break
    }
  }

  const onSend = () => {
    setLoading(true)

    axios
      .post("http://localhost:1337/api/messages", {
        data: {
          name: values.name,
          email: values.email,
          message: values.message,
        },
      })
      .then((res) => {
        setLoading(false)
        setValues({
          name: "",
          email: "",
          message: "",
        })
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4bb543",
        })
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#ff3232",
        })
      })
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Head>
        <title key="title">Contact Me | Chris Diorio</title>
        <meta
          name="description"
          key="description"
          content="Get in touch with Chris about opportunities, questions, and comments!"
        />
        <meta
          property="og:title"
          content="Contact Me | Chris Diorio"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="http://www.chrisdiorio.net/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="http://www.chrisdiorio.net/contact"
        />
      </Head>
      <Grid item md sx={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Title variant="h1" align="center">
          Contact Me
        </Title>
      </Grid>
      <Grid item md sx={{ marginBottom: matchesSM ? "2em" : "4em" }}>
        <Typography variant="body1">
          Thank you so much for checking out my portfolio website. If you would
          like to contact me, feel free to use the form below. I'd love to keep
          in touch and hear from you!
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        direction="column"
        mb={"2rem"}
      >
        <Grid item>
          <StyledTextField
            label="Name"
            id="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Email"
            id="email"
            value={values.email}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Message"
            id="message"
            value={values.message}
            multiline
            rows={8}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disabled={
              values.name.length === 0 ||
              values.message.length === 0 ||
              values.email.length === 0 ||
              loading
            }
            onClick={onSend}
          >
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                Send Message
                <div style={{ marginLeft: "0.5rem" }} />
                <SendIcon />
              </>
            )}
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  )
}
