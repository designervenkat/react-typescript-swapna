import { useState } from "react"

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => {
    setIsLoggedIn(true)
  }
  const handleLoggedOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>

    
      <h2 className="my-6">User is {isLoggedIn ? "Log In" : " Log Out "}</h2>

      <button onClick={handleLoggedIn} type="button">Login</button>
      <button onClick={handleLoggedOut} type="button">Logout</button>


    </div>
  )
}

export default Login