import React from "react"
import { useState } from "react"

export const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const color = theme === "light" ? "#FFF" : "#FFF"
  const backgroundColor = theme === "light" ? "#FFF" : "#FFF"

  document.body.style.color = color
  document.body.style.backgroundColor = backgroundColor

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
