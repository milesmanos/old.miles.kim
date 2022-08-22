import { navigate } from "gatsby"
import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints } from "../styles/styleObjects/layout"
import NavTabs from "./NavTabs"
import { text } from "../styles/styleObjects/text"
import { MailSvg } from "../icons/MailSvg"
import { ChevronBackSvg } from "../icons/ChevronBackSvg"

const navLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 99;
  height: 48px;
  padding: 0px 12px;
  ${breakpoints.lg_md} {
    background-color: ${colors.tint.white};
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`
const left = css`
  display: flex;
`
const middle = css`
  display: none;
  /* width: 800px; */
  ${breakpoints.lg_md} {
    flex-grow: 1;
  }
`
const right = css`
  display: flex;
  justify-content: flex-end;
`

const backButton = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${text.complete.sm}
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

// pass in "projectName" prop for subpages

export default function Navbar() {
  return (
    <div className={navLayout}>
      <div className={left}>
        <button className={backButton} onClick={() => navigate(-1)}>
          <ChevronBackSvg size={24} />
          <strong>MILES KIM</strong>
        </button>
      </div>
      <div className={middle}>
        <NavTabs />
      </div>
      <div className={right}>
        <MailSvg size={24} />
      </div>
    </div>
  )
}
