import { Link, navigate } from "gatsby"
import { css } from "linaria"
import React from "react"
import { colors } from "../styles/styleObjects/colors"
import { breakpoints, pagePadding } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import { MailSvg } from "../icons/MailSvg"
import Slash from "./structure/Slash"

const navLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 99;
  height: 48px;
  padding: 0px ${pagePadding.horizLg};
  span {
    white-space: nowrap;
  }
  ${breakpoints.lg_md} {
    background-color: ${colors.tint.white};
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    padding: 0px ${pagePadding.horizSm};
  }
`
const left = css`
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
  display: flex;
  ${text.complete.sm}
  gap: 8px;
  text-transform: uppercase;
`
const right = css`
  display: flex;
  justify-content: flex-end;
`

const linkButton = css`
  color: ${colors.content.black.secondary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: ${colors.content.black.primary};
  }
`
const whiteCurtain = css`
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 12px;
  background: linear-gradient(
    to right,
    rgb(255, 255, 255, 0),
    rgb(255, 255, 255, 1)
  );
`

// pass in "projectName" prop for subpages

export default function Navbar({ category, title }) {
  return (
    <div className={navLayout}>
      <div className={left}>
        {sessionStorage.getItem("@@scroll|/|initial") ? (
          <button className={linkButton} onClick={() => navigate(-1)}>
            <span>
              <strong>MILES KIM</strong>
            </span>
          </button>
        ) : (
          <Link className={linkButton} to="/">
            <span>
              <strong>MILES KIM</strong>
            </span>
          </Link>
        )}

        {category && (
          <>
            <Slash />
            <Link className={linkButton} to={"/" + category}>
              <span>
                <strong>{category}</strong>
              </span>
            </Link>
          </>
        )}
        {title && (
          <>
            <Slash />
            <span
              style={{
                paddingRight: "8px",
              }}
            >
              <strong>{title}</strong>
            </span>
          </>
        )}
        <div className={whiteCurtain} />
      </div>
      <div className={right}>
        <MailSvg size={24} />
      </div>
    </div>
  )
}
