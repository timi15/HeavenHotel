import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fejlec } from './Fejlec'
import { Logo } from './Logo'
import { AuthContext } from '../context/auth/AuthContext'


export const Layout = ({ children }) => {

    const { currentUser, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    const pages = [
        { name: 'Főoldal', route: '/' },
        { name: 'Szobák', route: '/szobak' },
        { name: 'Látnivalók', route: '/latnivalok' },
        { name: 'Foglalás', route: '/foglalas' },
        { name: 'Kapcsolat', route: '/kapcsolatok' }
    ];

    const adminPages = [
        { name: 'Főoldal', route: '/' },
        { name: 'Szobák', route: '/szobak' },
        { name: 'Látnivalók', route: '/latnivalok' },
        { name: 'Foglalás', route: '/foglalas' },
        { name: 'Kapcsolat', route: '/kapcsolatok' },
        { name: 'Adminfelület', route: '/adminfelulet' }
    ];
    const settings = [
        { name: 'Bejelentkezés', route: '/bejelentkezes' },
        { name: 'Regisztráció', route: '/regisztracio' },
    ];

    const loggedIn = [
        { name: 'Kijelentkezés' },
    ];


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (route = false) => {
        if (route)
            navigate(route);

        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (route = false) => {
        if (route)
            navigate(route);

        setAnchorElUser(null);
    };


    return (
        <>
            <Fejlec />
            <Logo />
            <AppBar position="static" style={{borderStyle:"double", borderColor:"beige", borderWidth:7, background: "rgba(0, 0, 0, 0.31)" }}  >
                <Container maxWidth="xl">
                    <Toolbar disableGutters  >

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu

                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={() => handleCloseNavMenu()}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {currentUser != null && currentUser['isAdmin'] === 1 && (adminPages.map((page, index) => (
                                    <MenuItem key={index} onClick={() => handleCloseNavMenu(page.route)}>
                                        <Typography id='appbar-element' textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                )))}

                                {(currentUser === null || currentUser['isAdmin'] === 0) && (pages.map((page, index) => (
                                    <MenuItem key={index} onClick={() => handleCloseNavMenu(page.route)}>
                                        <Typography id='appbar-element' textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                )))}

                            </Menu>
                        </Box>


                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                            {currentUser != null && currentUser['isAdmin'] === 1 && (adminPages.map((page, index) => (
                                <Button
                                    id="appbar-button"
                                    key={index}
                                    onClick={() => handleCloseNavMenu(page.route)}
                                    sx={{ my: 2, display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            )))}

                            {(currentUser === null || currentUser['isAdmin'] === 0) && (pages.map((page, index) => (
                                <Button
                                    id="appbar-button"
                                    key={index}
                                    onClick={() => handleCloseNavMenu(page.route)}
                                    sx={{ my: 2, display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            )))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src="/broken-image.jpg" />
                            </IconButton>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {currentUser === null && (settings.map((setting, index) => (
                                    <MenuItem key={index} onClick={() => handleCloseUserMenu(setting.route)}>

                                        <Typography id='appbar-element' textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                )))                              
                                
                                }

                                {currentUser !== null && (loggedIn.map((setting, index) => (
                                    <MenuItem key={index} onClick={() => logout()}>

                                        <Typography id='appbar-element' textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                )))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {children}


        </>
    )
}