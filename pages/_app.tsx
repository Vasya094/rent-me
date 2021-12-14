import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import { GlobalStyles } from "./../components/globalStyles";
import { lightTheme, darkTheme } from "./../components/Themes"



function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('light');
    const themeToggle = () => {
        console.log(11)
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <div>
              <h3>Tru</h3>
              <button onClick={themeToggle}>Switch Theme</button>
              <Component {...pageProps} />
          </div>
      </ThemeProvider>
      )
}

export default MyApp
