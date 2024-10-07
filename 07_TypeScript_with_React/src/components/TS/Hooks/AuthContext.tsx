import React, { createContext, useContext, useState } from 'react'

type AuthContextType = {
    isAuthenticated: boolean,
    login: () => void,
    logout: () => void
}

interface AuthContextProp {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider:React.FC<AuthContextProp> = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = () => setIsAuthenticated(true)
    const logout = () => setIsAuthenticated(false)
  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const AuthStatus:React.FC = () => {
    const authContext = useContext(AuthContext)
    
    if(!authContext) {
        return null
    }

    const {isAuthenticated, login, logout} = authContext

    return (
        <div>
            <h1>useContext Hook</h1>
            {
                isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={login}>Login</button>
                )
            }
        </div>
    )
}
