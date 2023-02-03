import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css, cx } from "linaria"
import React, { useState } from "react"
import { CloseSVG } from "../icons/CloseSVG"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"
import { colors } from "../styles/styleObjects/colors"
import { breakpoint } from "../styles/styleObjects/layout"
import { text } from "../styles/styleObjects/text"
import Button from "./Button"
import { CopySVG } from "../icons/CopySVG"
import { CheckSVG } from "../icons/CheckSVG"
import { Spacers } from "../styles/styleObjects/spacers"

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
const buttonGroup = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${colors.black.secondary};
  div.buttonRow {
    width: 100%;
    display: flex;
    gap: 16px;
  }
  div.label {
    width: 40px;
    flex-shrink: 0;
  }
`
const profPic = css`
  border-radius: 2px;
`

export default function Header({ isClear }) {
  const [showInfo, setShowInfo] = useState(false)
  const [copiedText, setCopiedText] = useState("")

  const handleOpenInfo = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden"
    setShowInfo(true)
  }
  const handleCloseInfo = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
    setShowInfo(false)
  }

  return (
    <div className={cx(navLayout, isClear && clear)}>
      <div className={flexGrow}>
        <Link to="/" className={miles}>
          Miles Kim
        </Link>
      </div>
      <Button
        isLightbox={isClear}
        isBlack={!isClear}
        onClick={() => handleOpenInfo()}
      >
        <div className="text">Info</div>
      </Button>

      {/* Info */}
      {showInfo && (
        <>
          <div className={infoOverlay}>
            <button
              className={clickOutToClose}
              onClick={() => handleCloseInfo()}
            >
              {" "}
            </button>
            <div className={infoBox}>
              <div className={mockNav}>
                <div className={flexGrow}>
                  <Link to="/" className={miles}>
                    Miles Kim
                  </Link>
                </div>
                <Button onClick={() => handleCloseInfo()}>
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
                <div className={buttonGroup}>
                  <div className="buttonRow">
                    <div className="label">email</div>
                    <Button
                      isFullWidth
                      onClick={() => {
                        setCopiedText("i@miles.kim")
                        navigator.clipboard.writeText("i@miles.kim")
                        setTimeout(() => {
                          setCopiedText("")
                        }, 2000)
                      }}
                      isDisabled={copiedText === "i@miles.kim"}
                      isBlack
                    >
                      <div className="text">
                        {copiedText === "i@miles.kim"
                          ? "Copied – can’t wait!"
                          : "i@miles.kim"}
                      </div>
                      <div className="icon">
                        {copiedText === "i@miles.kim" ? (
                          <CheckSVG size={16} />
                        ) : (
                          <CopySVG size={16} />
                        )}
                      </div>
                    </Button>
                  </div>
                  <div className="buttonRow">
                    <div className="label">read</div>
                    <a
                      href="https://mileskim.substack.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ width: "100%" }}
                    >
                      <Button isFullWidth isBlack>
                        <div className="text">mileskim.substack.com</div>
                        <div className="icon">
                          <ExternalLinkSVG size={16} />
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>

                <StaticImage
                  src="../images/square-prof-pic.jpg"
                  alt="Me"
                  aspectRatio={1 / 1}
                  className={profPic}
                />
                <Spacers.Vertical._0px />
                <Button isFullWidth onClick={() => handleCloseInfo()}>
                  <div className="text">Close</div>
                  <div className="icon">
                    <CloseSVG size={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
