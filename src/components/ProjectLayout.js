// import { navigate } from "gatsby"
import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import Navbar from "./Navbar"

const pageWrapper = css`
  ${text.complete.md};
  color: ${colors.content.black.primary};
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
  ${pagePadding.complete.lg};
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm};
    ${text.complete.sm};
  }

  h1 {
    text-transform: uppercase;
    margin-top: 1.5em;
    font-size: 48px;
    line-height: 1.5;
    ${breakpoints.md_sm} {
      ${text.complete.lg};
    }
  }
  h2 {
    margin-top: calc(1.5 * ${text.lineHeight.md});
    ${text.complete.md};
    margin-bottom: ${text.lineHeight.md};
    ${breakpoints.md_sm} {
      margin-bottom: ${text.lineHeight.sm};
    }
  }
  p {
    ${text.complete.md};
    margin-bottom: ${text.lineHeight.md};
    ${breakpoints.md_sm} {
      ${text.complete.sm};
      margin-bottom: ${text.lineHeight.sm};
    }
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
