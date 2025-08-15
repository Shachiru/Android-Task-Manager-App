import { createContext, ReactNode, useContext, useState } from "react"

const AUthContext = createContext<any>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUser, setIsUser] = useState(false)

  const login = () => setIsUser(true)
  const logOut = () => setIsUser(false)

  return (
    <AUthContext.Provider value={{ isUser, login, logOut }}>
      {children}
    </AUthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AUthContext)
}
