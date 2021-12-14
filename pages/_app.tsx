import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import { GlobalStyles } from "./../components/globalStyles";
import { lightTheme, darkTheme } from "./../components/Themes"
import { useRouter } from 'next/router';
import {NextRouter} from "next/dist/shared/lib/router/router";
import Link from 'next/link';
import { en } from './../locales/en';
import { ru } from './../locales/ru';



function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<string>('light');
    const { locale, locales } = useRouter() as NextRouter

    const themeToggle = () => {
        console.log(11)
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const t = locale === 'en' ? en : ru;
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <div>
              <h3>{t.welcomeTo} Rent Me</h3>
              <button onClick={themeToggle}>Switch Theme</button>
              <div>
                  {locales && locales.map((l, i) => {
                      return (
                          <span key={i}>
                <Link href={`/${l}`} locale={l}>
                  {l}
                </Link>
                            <hr/>
              </span>
                      );
                  })}
              </div>
          </div>
          <Component {...pageProps} />

      </ThemeProvider>
      )
}

export default MyApp
