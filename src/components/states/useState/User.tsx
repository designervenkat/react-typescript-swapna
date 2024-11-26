import { useState } from "react"

type User = {
  username: string
  email: string,
  token: string
  mobile?: number
}

function User() {

  const [user, setUser] = useState<User>({} as User)


  const handleLoggedIn = () => {
    setUser({
      username: "John",
      email: "john@gmail.com",
      token: "ahas3d23fh25325as234uh23uwy4238y423432"
    })
  }

  return (
    <div>
    
      <h2 className="my-6">User is {user.username} - {user.email }</h2>

      <button onClick={handleLoggedIn} type="button">Login</button>    

    </div>
  )
}

export default User