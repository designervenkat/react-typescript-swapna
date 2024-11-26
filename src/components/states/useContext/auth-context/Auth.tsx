import { useContext } from "react"
import { AuthContext } from "./AuthContext"


function Auth() {

  const authContext = useContext(AuthContext)

  const handleLogin = () => {
    
      
      authContext.setUser({
        name: "john",
        email: "j@j.com",
        mobile: ""
        
      })
  

  }
  const handleLogout = () => {
    
      // authContext.setUser()
  
  }
  return (
    <div>
      <h2>Authentication</h2>

      <p>Username is : { authContext.user.name }</p>
      <p>Email is : { authContext.user.email }</p>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Auth