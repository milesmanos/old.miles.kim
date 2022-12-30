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
      <div>Designed and built by Miles Kim</div>
      <div>i@miles.kim</div>
    </div>
  )
}

export default Footer
