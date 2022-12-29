import { css } from "linaria"
import React from "react"
import { useContext } from "react"
import {
  ThemeContext,
  ThemeProvider,
} from "../styles/styleObjects/ThemeProvider"

const pageWrapper = css`
  color: gray;
  min-height: 100vh;
`

export default function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <div
        className={pageWrapper}
        style={{ backgroundColor: theme === "light" ? "blue" : "#CCC" }}
      >
        Oh hello.
        <button onClick={toggleTheme}>TOGGLE</button>
      </div>
    </ThemeProvider>
  )
}
