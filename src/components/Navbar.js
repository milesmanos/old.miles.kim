import { Link } from "gatsby"
import { css, cx } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { text } from "../styles/styleObjects/text"
import Button from "./buttons/Button"

const navLayout = css`
  ${text.complete.sm}
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 0.93);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  z-index: 1;
  color: ${colors.black.darkest};
`

const flexGrow = css`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`

const miles = css`
  flex-grow: 0;
  font-weight: 500;
  cursor: pointer;
`

// options
const clear = css`
  background-color: rgba(255, 255, 255, 0);
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  color: white;
`

export default function Navbar({ isClear, onClick }) {
  return (
    <div className={cx(navLayout, isClear && clear)}>
      <div className={flexGrow}>
        <Link to="/" className={miles}>
          Miles Kim
        </Link>
      </div>
      <Button isDark={isClear} onClick={onClick}>
        <div className="text">Info</div>
      </Button>
    </div>
  )
}
