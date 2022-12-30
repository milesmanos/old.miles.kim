import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css, cx } from "linaria"
import React, { useState } from "react"
import { XIcon } from "../icons/XIcon"
import { colors } from "../styles/styleObjects/colors"
import { breakpoint } from "../styles/styleObjects/layout"
import { Spacers } from "../styles/styleObjects/spacers"
import { text } from "../styles/styleObjects/text"
import Button from "./Button"

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

// info box
const infoOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
const mockNav = css`
  position: sticky;
  background-color: white;
  display: flex;
  align-items: center;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 16px 24px;
  color: ${colors.black.darkest};
`
const clickOutToClose = css`
  height: 100vh;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.25);
`
const infoBox = css`
  position: relative;
  background-color: white;
  width: 500px;
  ${breakpoint} {
    width: 100%;
  }
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: auto;
`
const infoContent = css`
  padding: 32px 24px 24px 24px;
  color: ${colors.black.primary};
  display: flex;
  flex-direction: column;
  gap: 48px;
`
const infoText = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const profPic = css`
  border-radius: 2px;
`

export default function Navbar({ isClear }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className={cx(navLayout, isClear && clear)}>
      <div className={flexGrow}>
        <Link to="/" className={miles}>
          Miles Kim
        </Link>
      </div>
      <Button isDark={isClear} onClick={() => setShowInfo(!showInfo)}>
        <div className="text">Info</div>
      </Button>

      {/* Info */}
      {showInfo && (
        <>
          <div className={infoOverlay}>
            <div className={infoBox}>
              <div className={mockNav}>
                <div className={flexGrow}>
                  <Link to="/" className={miles}>
                    Miles Kim
                  </Link>
                </div>
                <Button onClick={() => setShowInfo(false)}>
                  <div className="text">Close</div>
                </Button>
              </div>
              <div className={infoContent}>
                <div className={infoText}>
                  <div>
                    ... designs interfaces, lives in San Francisco, writes
                    often, paints sometimes. Loves music, surfing, hiking, and
                    nature docs.
                  </div>
                  <div>
                    Graduated Yale class of 2020 with a B.A. in studio art. Has
                    worked as a designer and (sometimes) frontend developer for
                    startups over the past years.
                  </div>
                  <div>
                    <div style={{ textDecoration: "line-through" }}>
                      Is always looking for new ways to think and create, is
                      itching for new projects.
                    </div>
                    Is working at Ahoy Labs.
                  </div>
                </div>
                <StaticImage
                  src="../images/square-prof-pic.jpg"
                  alt="Me"
                  aspectRatio={1 / 1}
                  className={profPic}
                />
                <Button isFullWidth onClick={() => setShowInfo(false)}>
                  <div className="text">Close</div>
                  <div className="icon">
                    <XIcon size={16} />
                  </div>
                </Button>
              </div>
            </div>
            <button
              className={clickOutToClose}
              onClick={() => setShowInfo(!showInfo)}
            />
          </div>
        </>
      )}
    </div>
  )
}
