import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Fonts from "../src/ui/Fonts";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [lifeIndex, setLifeIndex] = useState(0);
  const [value, setValue] = useState(0);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    Fonts();
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Chris Diorio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
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
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
