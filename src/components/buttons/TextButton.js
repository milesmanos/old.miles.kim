import { Link } from "gatsby"
import { css, cx } from "linaria"
import React from "react"
import { colors } from "../../styles/styleObjects/colors"

const buttonSty = css`
  line-height: inherit;
  border: none;
  background-color: inherit;
  padding: 0px;
  display: inline-block;
  cursor: pointer;
  box-shadow: inset 0 -2px 0 0 ${colors.content.black.line};
`

const blackPrimary = css`
  color: ${colors.content.black.primary};
  :hover {
    color: ${colors.content.black.primary};
    box-shadow: inset 0 -2px 0 0 ${colors.content.black.primary};
  }
`
const blackSecondary = css`
  color: ${colors.content.black.secondary};
  :hover {
    color: ${colors.content.black.primary};
    box-shadow: inset 0 -2px 0 0 ${colors.content.black.secondary};
  }
`

export default function TextButton({ color, onClick, children }) {
  return (
    <button
      className={cx(
        buttonSty,
        color === "blackPrimary"
          ? blackPrimary
          : color === "blackSecondary"
          ? blackSecondary
          : null
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
