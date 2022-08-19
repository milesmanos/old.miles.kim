import { css, cx } from "linaria"
import React from "react"
import { MailSvg } from "../../icons/MailSvg"
import { colors } from "../../styles/styleObjects/colors"
import { text } from "../../styles/styleObjects/text"

const buttonSty = css`
  ${text.complete.sm};
  color: ${colors.content.black.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  border: none;
  cursor: pointer;
`

// SIZES
const lg = css`
  height: 48px;
  padding: 20px;
  gap: 10px;
`
const fullWidth = css`
  width: 100%;
`

// COLORS
const white = css`
  background-color: ${colors.tint.white};
  -webkit-box-shadow: inset 0px 0px 0px 1px ${colors.content.black.line},
    0 0 3px 0 ${colors.content.black.line};
  -moz-box-shadow: inset 0px 0px 0px 1px ${colors.content.black.line},
    0 0 3px 0 ${colors.content.black.line};
  box-shadow: inset 0px 0px 0px 1px ${colors.content.black.line},
    0 0 3px 0 ${colors.content.black.line};
  :hover {
    background-color: ${colors.tint.lightBlack};
  }
`

export default function Button({ size, color, svgFirst, children }) {
  return (
    <button
      className={cx(
        buttonSty,
        size === "lg" ? lg : null,
        color === "white" ? white : null,
        fullWidth && "fullWidth"
      )}
    >
      {svgFirst && <MailSvg size={20} />}
      {children}
    </button>
  )
}
