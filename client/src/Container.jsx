import React from 'react'
import App from './App'
import { Auth } from './context/auth/AuthContext'
import { Room } from './context/room/RoomContext'
import { RoomType } from './context/room/RoomTypeContext'
import { Users } from './context/user/UserContext'

export const Container = ({ children }) => {
    return (
        <Auth>
            <Users>
                <RoomType>
                    <Room>
                        <App>
                            {children}
                        </App>
                    </Room>
                </RoomType>
            </Users>
        </Auth>
    )
}
