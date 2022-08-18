import { Link } from "gatsby"
import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints } from "../styles/styleObjects/layout"

// Nav styles
const navTabs = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 99px;
  background-color: ${colors.tint.lightBlack};
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
  }
  ${breakpoints.md_sm} {
    height: 36px;
  }
`
const active = css`
  color: ${colors.content.white.primary};
  background-color: ${colors.tint.black};
  pointer-events: none;
`

export default function NavTabs() {
  return (
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
  )
}
