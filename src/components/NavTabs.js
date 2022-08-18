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
`

const navLink = css`
  color: ${colors.content.black.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
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

const anchorSty = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function NavTabs() {
  return (
    <div className={container}>
      <Link activeClassName={active} className={navLink} to="/">
        <a className={anchorSty}>All Projects</a>
      </Link>
      <Link activeClassName={active} className={navLink} to="/design">
        <a className={anchorSty}>Design</a>
      </Link>
      <Link activeClassName={active} className={navLink} to="/art">
        <a className={anchorSty}>Art</a>
      </Link>
      <Link activeClassName={active} className={navLink} to="/writing">
        <a className={anchorSty}>Writing</a>
      </Link>
    </div>
  )
}
