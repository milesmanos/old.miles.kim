import { css, cx } from "linaria"
import React from "react"
import { text } from "./text"

const noFlexShrink = css`
  flex-shrink: 0;
`

const width4px = css`
  width: 4px;
`

const height96px = css`
  height: 96px;
`
const height4px = css`
  height: 4px;
`

export const Spacers = {
  Horizontal: {
    _4px: () => <div className={cx(noFlexShrink, width4px)} />,
  },
  Vertical: {
    _4px: () => <div className={cx(noFlexShrink, height4px)} />,
    _96px: () => <div className={cx(noFlexShrink, height96px)} />,
  },
}
