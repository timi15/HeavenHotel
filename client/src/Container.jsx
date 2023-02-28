import React from 'react'
import App from './App'
import { Auth } from './context/auth/AuthContext'
import { Room } from './context/room/RoomContext'
import { RoomType } from './context/room/RoomTypeContext'

export const Container = ({ children }) => {
    return (
        <Auth>
            <RoomType>
                <Room>
                    <App>
                        {children}
                    </App>
                </Room>
            </RoomType>
        </Auth>
    )
}
