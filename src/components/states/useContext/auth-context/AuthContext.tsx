import { createContext, useState } from "react";

type AuthContextProps = {
  children: React.ReactNode
}

type AuthUser = {
  name: string,
  email: string
  mobile : string
}

type AuthContext = {
  user: AuthUser
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>
}


// export const AuthContext = createContext<AuthContext | null>(null)
export const AuthContext = createContext({} as AuthContext)

export const AuthContextProvider = ({children}: AuthContextProps) => {
  
  // const [user, setUser] = useState<AuthUser | null>(null)
  const [user, setUser] = useState({} as AuthUser)

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}