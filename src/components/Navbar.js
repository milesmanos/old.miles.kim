import { css, cx } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import NavTabs from "./NavTabs"

const navLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 99;
  padding: 12px 16px;
  background-color: ${colors.tint.white};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  ${breakpoints.lg_md} {
    display: flex;
  }
`
const left = css`
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  ${text.complete.sm}
  gap: 8px;
  text-transform: uppercase;
`
const middle = css`
  max-width: 800px;
  flex-grow: 1;
`
const right = css`
  display: flex;
  justify-content: flex-end;
`

export default function Navbar() {
  return (
    <div className={cx(navLayout)}>
      <div className={left}></div>
      <div className={middle}>
        <NavTabs />
      </div>
      <div className={right}></div>
    </div>
  )
}
