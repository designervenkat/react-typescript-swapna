import { useState } from "react"

type User = {
  username: string
  email: string,
  token: string
  mobile?: number
}

function LoginUser() {

  const [user, setUser] = useState<User | null>(null)

  const handleLoggedIn = () => {
    setUser({
      username: "John",
      email: "john@gmail.com",
      token: "ahas3d23fh25325as234uh23uwy4238y423432"
    })
  }
  const handleLoggedOut = () => {
    setUser(null)
  }


  return (
    <div>


      <h2 className="my-6">
        {user ? `User is ${user?.username} - ${user?.email}` : "Please login!"}</h2>



      {user ? (<button onClick={handleLoggedOut} type="button">Logout</button>) : (<button onClick={handleLoggedIn} type="button">Login</button>)}

      {/* {!user && <button onClick={handleLoggedIn} type="button">Login</button>}

      {user && <button onClick={handleLoggedOut} type="button">Logout</button>} */}


    </div>
  )
}

export default LoginUser