import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import TextLink from "../components/buttons/TextLink"
import { text } from "../styles/styleObjects/text"
import { Spacers } from "../styles/styleObjects/spacers"
import { Link } from "gatsby"

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
  position: relative;
  ${text.complete.lg}
  ${breakpoints.md_sm} {
    ${text.complete.md};
  }
  span {
    font-weight: ${text.weight.bold};
  }
`

// Nav styles
const navTabs = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 99px;
  -webkit-box-shadow: inset 0px 0px 0px 1px ${colors.content.black.line};
  -moz-box-shadow: inset 0px 0px 0px 1px ${colors.content.black.line};
  box-shadow: inset 0px 0px 0px 1px ${colors.content.black.line};
`
const navLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.content.black.secondary};
  border-radius: 99px;
  cursor: pointer;
  height: 48px;
  :hover {
    color: ${colors.content.black.primary};
    background-color: ${colors.tint.lightBlack};
  }
`
const active = css`
  color: ${colors.content.white.primary};
  background-color: ${colors.tint.black};
`

export default function Layout({ children }) {
  return (
    <div className={pageWrapper}>
      <header className={headerSty}>
        <strong>MILES KIM</strong>
        <br />
        <br />^ I’m a <span style={{ color: colors.red }}> designer</span>,
        <span style={{ color: colors.green }}> artist</span>, and{" "}
        <span style={{ color: colors.blue }}> writer</span> based in San
        Francisco. Here’s a single-page mishmash of my projects in all
        disciplines.{" "}
        <TextLink color="blackPrimary">More&nbsp;about&nbsp;me</TextLink>
      </header>
      <Spacers.Vertical._64px />

      {/* Tabs */}
      <nav className={navTabs}>
        <Link activeClassName={active} className={navLink} to="/">
          All
        </Link>
        <Link activeClassName={active} className={navLink} to="/design">
          Design
        </Link>
        <Link activeClassName={active} className={navLink} to="/art">
          Art
        </Link>
        <Link activeClassName={active} className={navLink} to="/writing">
          Writing
        </Link>
      </nav>
      <Spacers.Vertical._48px />
      {children}
    </div>
  )
}
