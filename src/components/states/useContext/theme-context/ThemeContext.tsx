import React, { createContext } from "react"
import { theme } from "./themes"

type TContextProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children}: TContextProps) => {
  return (
    <ThemeContext.Provider value={theme}>

      {children}

    </ThemeContext.Provider>
  )
}
