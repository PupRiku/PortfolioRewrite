import React, { useState } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import { CacheProvider } from "@emotion/react"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import Fonts from "../src/ui/Fonts"
import Header from "../src/ui/Header"
import Footer from "../src/ui/Footer"
import "../assets/css/style.css"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import App from "next/app"
import createEmotionServer from "@emotion/server/create-instance"


// Store Strapi Global object in context
export const GlobalContext = createContext({})

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const [experienceIndex, setExperienceIndex] = useState(0)
  const [lifeIndex, setLifeIndex] = useState(0)
  const [value, setValue] = useState(0)
  const { global } = pageProps

  React.useEffect(() => {
    Fonts()
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Chris Diorio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <ThemeProvider theme={theme}>
          <Header
            value={value}
            setValue={setValue}
            lifeIndex={lifeIndex}
            setLifeIndex={setLifeIndex}
            experienceIndex={experienceIndex}
            setExperienceIndex={setExperienceIndex}
          />
          <Component
            {...pageProps}
            value={value}
            setValue={setValue}
            lifeIndex={lifeIndex}
            setLifeIndex={setLifeIndex}
            experienceIndex={experienceIndex}
            setExperienceIndex={setExperienceIndex}
          />
          <Footer
            value={value}
            setValue={setValue}
            lifeIndex={lifeIndex}
            setLifeIndex={setLifeIndex}
            experienceIndex={experienceIndex}
            setExperienceIndex={setExperienceIndex}
          />
        </ThemeProvider>
      </GlobalContext.Provider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

MyApp.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(appProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...appProps,
    emotionStyleTags,
    pageProps: { global: globalRes.data },
  }
}

