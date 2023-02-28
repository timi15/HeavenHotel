import React from 'react'
import App from './App'
import { Auth} from './context/auth/AuthContext'

export const Container = ({ children }) => {
    return (
        <Auth>
            <App>
                {children}
            </App>
        </Auth>
    )
}
