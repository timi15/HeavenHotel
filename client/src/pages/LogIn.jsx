import React from 'react'
import Box from '@mui/material/Box';
import { Avatar, createTheme, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';





export const LogIn = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#837008",
      },
      secondary: {
        main: "#837008",
      },
    },


  });

  return (
    <Container component="main" maxWidth="xs" style={{ padding: 100 }} >

      <ThemeProvider theme={theme}>

        <Box
          sx={{
            margin: 'auto',
            width: 700,
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'beige'

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: ' rgb(131, 112, 8)' }}>

          </Avatar>
          <Typography component="h1" variant="h5">
            Bejelentkezés
          </Typography>
          <Box component="form"  sx={{ mt: 1 }}>
            <TextField

              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail cím"
              name="email"
              autoComplete="email"
              autoFocus

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Jelszó"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div id="login">

              <Button
                id="button"
                type="submit"
                fullWidth
                variant="contained"
                style={{ width: 170, marginTop: 20, }}
                sx={{ mt: 3, mb: 2, }}
              >
                Bejelentkezés
              </Button>
            </div>

            <Grid container>
              <Grid item xs>

              </Grid>
              <Grid item>
                < div id="signuplink">

                  <Link to="/SignUp" variant="body2" style={{ width: 170, color: ' rgb(131, 112, 8)', marginTop: 10, }}>
                    Nincs még fiókja? Regisztráljon itt
                  </Link>
                </div>

              </Grid>
            </Grid>
          </Box>
        </Box>

      </ThemeProvider>

    </Container>



  )
}
