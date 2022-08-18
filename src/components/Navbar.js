// import { navigate } from "gatsby"
import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints } from "../styles/styleObjects/layout"
// import TextButton from "./buttons/TextButton"
import NavTabs from "./NavTabs"
import Button from "./buttons/Button"
import { text } from "../styles/styleObjects/text"

const navLayout = css`
  display: grid;
  grid-template-columns: 1fr 800px 1fr;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  gap: 16px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 99;
  background-color: ${colors.tint.white};
  padding: 12px 24px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.tint.lightBlack};
  box-shadow: 0 0 12px 0 ${colors.tint.lightBlack};
`
const left = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${text.complete.md}
`
const middle = css`
  width: 800px;
  ${breakpoints.lg_md} {
    flex-grow: 1;
  }
`
const right = css`
  display: flex;
  justify-content: flex-end;
`

// pass in "projectName" prop for subpages

export default function Navbar() {
  return (
    <div className={navLayout}>
      <div className={left}>
        <strong>MILES KIM</strong>
      </div>
      <div className={middle}>
        <NavTabs />
      </div>
      <div className={right}>
        <Button color="white" size="lg" svgFirst>
          Connect
        </Button>
      </div>
    </div>
  )
}
