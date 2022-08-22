import { css } from "linaria"
import React from "react"
import { colors } from "../../styles/styleObjects/colors"

const slash = css`
  color: ${colors.content.black.line};
`

export default function Slash() {
  return <span className={slash}>{" / "}</span>
}
