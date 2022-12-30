import { css, cx } from "linaria"
import React from "react"
import { colors } from "../../styles/styleObjects/colors"
import { text } from "../../styles/styleObjects/text"

const buttonSty = css`
  ${text.complete.sm};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${colors.line.light};
  margin-bottom: -1px;
  gap: 4px;
  cursor: pointer;
  div.text {
    display: flex;
    color: ${colors.black.darkest};
  }
  div.icon {
    display: flex;
    color: ${colors.black.barely};
  }
  :hover {
    border-bottom: 1px solid ${colors.line.dark};
    div.icon {
      color: ${colors.black.primary};
    }
  }
  :active {
    border-bottom: 1px solid ${colors.line.light};
    div.text {
      color: ${colors.black.secondary};
    }
    div.icon {
      color: ${colors.black.secondary};
    }
  }
`

const dark = css`
  border-bottom: 1px solid #494949;
  div.text {
    color: white;
  }
  :hover {
    border-bottom: 1px solid #808080;
  }
  :active {
    border-bottom: 1px solid #494949;
    div.text {
      color: #b5b5b5;
    }
  }
`

const fullWidth = css`
  justify-content: space-between;
  width: 100%;
`

export default function Button({ children, isDark, isFullWidth, onClick }) {
  return (
    <button
      className={cx(buttonSty, isDark && dark, isFullWidth && fullWidth)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
