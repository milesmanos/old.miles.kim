import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import Navbar from "./Navbar"

const pageWrapper = css`
  margin-top: 64px;
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

const overlaySheet = css`
  background-color: white;
  position: absolute;
  z-index: 99;
  width: 100%;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  border-top: solid 1px var(--content-black-line);
  ${pagePadding.complete.lg};
  ${breakpoints.md_sm} {
    ${pagePadding.complete.sm};
    ${text.complete.sm};
  }
`

export default function ProjectLayout({ children }) {
  return (
    <div className={pageWrapper}>
      <Navbar receding />
      <div className={overlaySheet}>{children}</div>
    </div>
  )
}
