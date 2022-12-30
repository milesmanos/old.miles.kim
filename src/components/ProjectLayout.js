import { css } from "linaria"
import React from "react"
import "../styles/global.css"
import "../styles/normalize.css"
import { colors } from "../styles/styleObjects/colors"
import Navbar from "./Navbar"

const pageWrapper = css``

const hero = css`
  height: 100vh;
  background-color: ${colors.black.darkest};
  display: flex;
  align-items: center;
  justify-content: center;
`

const mainBody = css`
  padding: 24px;
`

export default function ProjectLayout({ children }) {
  return (
    <div className={pageWrapper}>
      <Navbar isClear />
      <div className={hero}>hero</div>
      <div className={mainBody}>{children}</div>
    </div>
  )
}
