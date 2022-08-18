import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import LineHeightSpacer from "./structure/LineHeightSpacer"
import TextButton from "./buttons/TextButton"
import NavTabs from "./NavTabs"
// import Navbar from "./Navbar"

// Z-INDICES
// Navbar: 99

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
const headerSty = css`
  ${text.complete.lg}
  ${breakpoints.md_sm} {
    ${text.complete.md};
  }
  span {
    font-weight: ${text.weight.bold};
  }
`

export default function HomeLayout({ children }) {
  return (
    <div className={pageWrapper}>
      {/* <Navbar /> */}
      <header className={headerSty}>
        <strong>MILES KIM</strong>
        <LineHeightSpacer />^{" "}
        <span style={{ color: colors.red }}> Designer</span>,
        <span style={{ color: colors.green }}> artist</span>, &{" "}
        <span style={{ color: colors.blue }}> writer</span> @ San Francisco.{" "}
        <TextButton
          onClick={() => console.log("oh boy")}
          color="blackSecondary"
        >
          (...)
        </TextButton>
        <LineHeightSpacer isTwoLines />
      </header>

      {/* Tabs */}
      <NavTabs />
      {children}
    </div>
  )
}
