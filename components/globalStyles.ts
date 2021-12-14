import { createGlobalStyle} from "styled-components"
import { cssTheme } from "./../utils/types";

export const GlobalStyles = createGlobalStyle<{theme: cssTheme}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `
