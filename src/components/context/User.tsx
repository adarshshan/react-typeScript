import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Adarsh',
                email: 'adarshshanu3@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null);
        }
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {userContext?.user?.name}</p>
            <p>User email is {userContext?.user?.email}</p>
        </>
    )
}

export default User
