// import { navigate } from "gatsby"
import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
// import TextButton from "./buttons/TextButton"
import Navbar from "./Navbar"

const pageWrapper = css`
  color: ${colors.content.black.primary};
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  ${pagePadding.complete.lg}
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm}
  }
`

export default function ProjectLayout({ children }) {
  return (
    <div className={pageWrapper}>
      <Navbar />
      {children}
    </div>
  )
}
