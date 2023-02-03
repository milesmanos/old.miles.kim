import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { text } from "../styles/styleObjects/text"

const navLayout = css`
  ${text.complete.sm}
  width: 100%;
  padding: 16px 24px;
  color: ${colors.black.barely};
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <div className={navLayout}>
      <div>Miles Kim</div>
      <div>milesarthurkim@gmail.com</div>
    </div>
  )
}

export default Footer
