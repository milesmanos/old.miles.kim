import { Link } from "gatsby"
import { css, cx } from "linaria"
import React from "react"
import { colors } from "../../styles/styleObjects/colors"

const linkSty = css`
  display: inline-block;
  cursor: pointer;
  box-shadow: inset 0 -1px 0 0 ${colors.content.black.barely};
`

const blackSecondary = css`
  color: ${colors.content.black.secondary};
  :hover {
    color: ${colors.content.black.primary};
    box-shadow: inset 0 -1px 0 0 ${colors.content.black.secondary};
  }
`

export default function TextLink({ color, children }) {
  return (
    <Link
      className={cx(
        linkSty,
        color === "blackSecondary" ? blackSecondary : null
      )}
    >
      {children}
    </Link>
  )
}
