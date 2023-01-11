import React from "react"
import { Link, navigate } from "gatsby"
import Button from "../components/Button"
import { CloseSVG } from "../icons/CloseSVG"

export default function BackToHomeButton() {
  const isBrowser = () => typeof window !== "undefined"
  return isBrowser() &&
    window.history.length > 1 &&
    document.referrer.includes(window.location.host) ? (
    <Button isFullWidth onClick={() => navigate(-1)}>
      <div className="text">Back</div>
      <div className="icon">
        <CloseSVG size={16} />
      </div>
    </Button>
  ) : (
    <Link style={{ width: "100%" }} to="/">
      <Button isFullWidth>
        <div className="text">Home</div>
        <div className="icon">
          <CloseSVG size={16} />
        </div>
      </Button>
    </Link>
  )
}
