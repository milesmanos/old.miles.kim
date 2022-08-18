// DEPRECATED
import { Link } from "gatsby"
import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"

const container = css`
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

const NavTabs = () => (
  <nav className={container}>
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

export default NavTabs
