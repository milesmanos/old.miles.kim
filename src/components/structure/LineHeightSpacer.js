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
const three = css`
  height: 4.5em;
`
const em = css`
  height: 1em;
`

export default function LineHeightSpacer({ isTwoLines, isThreeLines, isEm }) {
  return (
    <div
      className={cx(
        noFlexShrink,
        isTwoLines ? two : isThreeLines ? three : isEm ? em : one
      )}
    />
  )
}
