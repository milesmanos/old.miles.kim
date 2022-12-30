import { Link } from "gatsby"
import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { text } from "../styles/styleObjects/text"

// Nav styles
const navTabs = css`
  ${text.complete.sm}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: inset 0px 0px 2px 0px ${colors.tint.lightBlack};
  border-radius: 99px;
  background-color: ${colors.tint.lightBlack};
  overflow: hidden;
  padding: 2px;
`
const navLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.content.black.secondary};
  border-radius: 99px;
  cursor: pointer;
  height: 32px;
  :hover {
    color: ${colors.content.black.primary};
  }
`
const active = css`
  color: ${colors.content.black.primary};
  background-color: ${colors.tint.white};
  pointer-events: none;
  box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.14);
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
