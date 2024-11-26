import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Card() {
  const theme = useContext(ThemeContext)
  return (
    <div
      style={{
        backgroundColor: theme.secondaryTheme.background,
        color: theme.secondaryTheme.text
      }}>
      Card
    </div>
  )
}

export default Card