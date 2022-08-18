import { css, cx } from "linaria"
import React from "react"

const noFlexShrink = css`
  flex-shrink: 0;
`
const one = css`
  height: 1.5em;
`
const two = css`
  height: 3em;
`

export default function LineHeightSpacer({ isTwoLines }) {
  return <div className={cx(noFlexShrink, isTwoLines ? two : one)} />
}
