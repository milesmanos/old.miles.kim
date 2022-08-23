import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"

const pageWrapper = css`
  margin-top: 48px;
  position: relative;
  ${text.complete.md};
  color: ${colors.content.black.primary};
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-top: 1.5em;
    margin-bottom: 0px;
    font-size: 48px;
    line-height: 1.5;
    ${breakpoints.md_sm} {
      ${text.complete.lg};
    }
  }
  h2 {
    margin-top: 36px;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: ${text.lineHeight.md};
    ${breakpoints.md_sm} {
      margin-top: ${text.lineHeight.md};
      ${text.complete.md};
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
  hr {
    border: 0px;
    border-bottom: 1px solid ${colors.content.black.line};
    margin-top: 3em;
    margin-bottom: 3em;
  }
`

export default function ProjectLayout({ children }) {
  return <div className={pageWrapper}>{children}</div>
}
