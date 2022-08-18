import { Link } from "gatsby"
import { css, cx } from "linaria"
import React from "react"
import { colors } from "../../styles/styleObjects/colors"

const linkSty = css`
  display: inline-block;
  cursor: pointer;
  box-shadow: inset 0 -2px 0 0 ${colors.content.black.tertiary};
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

export default function TextLink({ color, children }) {
  return (
    <Link
      className={cx(
        linkSty,
        color === "blackPrimary"
          ? blackPrimary
          : color === "blackSecondary"
          ? blackSecondary
          : null
      )}
    >
      {children}
    </Link>
  )
}
