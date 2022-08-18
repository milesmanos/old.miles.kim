import { css } from "linaria"
import React from "react"
import { colors } from "../../styles/styleObjects/colors"

const divider = css`
  border-top: 1px solid ${colors.content.black.line};
`

export default function Divider() {
  return <div className={divider} />
}
