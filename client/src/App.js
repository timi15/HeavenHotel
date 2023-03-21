import './asserts/css/style.css'
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { Latnivalok } from './pages/Latnivalok';
import { Szobak } from './pages/Szobak';
import { GYIK } from './components/GYIK';
import { Bejelentkezes } from './pages/Bejelentkezes';
import { Regisztracio } from './pages/Regisztracio';
import { Aszf } from './components/Aszf.jsx';
import { appTheme } from './theme/Theme';
import { Adatvedelem } from './components/Adatvedelem';
import { Kapcsolat } from './pages/Kapcsolat';
import { Foglalas } from './pages/Foglalas';
import { Kezdooldal } from './pages/Kezdooldal';
import { Adminfelulet } from "./pages/admin/Adminfelulet"
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { RoomTypeContext } from './context/room/RoomTypeContext';
import { RoomContext } from "./context/room/RoomContext"
import { FelhasznalokKezelese } from './pages/admin/felhasznalok/FelhasznalokKezelese';
import { Error } from './components/Error';
import { AuthContext } from './context/auth/AuthContext';
import { UserContext } from './context/user/UserContext';
import { FelhasznaloModositas } from './pages/admin/felhasznalok/FelhasznaloModositas';
import { SzobatipusokKezelese } from './pages/admin/szobatipusok/SzobatipusokKezelese';
import { SzobatipusModositas } from './pages/admin/szobatipusok/SzobatipusModositas';
import { BookingContext } from './context/booking/BookingContext';
import { FoglalasokKezelese } from './pages/admin/foglalasok/FoglalasokKezelese';


function App() {
  const { handleSet: handleSetUsers } = useContext(UserContext);
  const { handleSet: handleSetRoomTypes } = useContext(RoomTypeContext);
  const { handleSet: handleSetRooms } = useContext(RoomContext);
  const { handleSet: handleSetBooking } = useContext(BookingContext);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:8080/roomtypes", {
      headers: {
        'Access-Control-Allow-Origin': "localhost:3000"
      }
    })
      .then((res) => {
        handleSetRoomTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/rooms", {
      headers: {
        'Access-Control-Allow-Origin': "localhost:3000"
      }
    })
      .then((res) => {
        handleSetRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/users", {
      headers: {
        'Access-Control-Allow-Origin': "localhost:3000"
      }
    })
      .then((res) => {
        handleSetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/reservations", {
      headers: {
        'Access-Control-Allow-Origin': "localhost:3000"
      }
    })
      .then((res) => {
        handleSetBooking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);






  return (

    <ThemeProvider theme={appTheme}>

      <Router>
        <Layout>
          <Routes>

            <Route path='/' element={<Kezdooldal />} />
            <Route path='/szobak' element={<Szobak />} />
            <Route path='/latnivalok' element={<Latnivalok />} />
            <Route path='/latnivalok/foglalas' element={<Foglalas />} />
            <Route path='/foglalas' element={<Foglalas />} />
            <Route path='/kapcsolatok' element={<Kapcsolat />} />

            <Route path='/adatkezelesi_tajekoztato' element={<Adatvedelem />} />
            <Route path='/altalanos_szerzodesi_feltetelek' element={<Aszf />} />
            <Route path='/gyakori_kerdesek_es_valaszok' element={<GYIK />} />

            <Route path='/regisztracio' element={<Regisztracio />} />
            <Route path='/bejelentkezes' element={<Bejelentkezes />} />

            {
              currentUser != null && currentUser['isAdmin'] === 1 && (
                <>
                  <Route path='/adminfelulet' element={<Adminfelulet />} />

                  <Route path='/adminfelulet/felhasznalok' element={<FelhasznalokKezelese />} />
                  <Route path='/adminfelulet/felhasznalok/modositas/:id' element={<FelhasznaloModositas />} />

                  <Route path='/adminfelulet/szobak' element={<SzobatipusokKezelese />} />
                  <Route path='/adminfelulet/szobak/modositas/:id' element={<SzobatipusModositas />} />

                  <Route path='/adminfelulet/foglalasok' element={<FoglalasokKezelese/>} />
                </>
              )
            }

            <Route path='*' element={<Error />} />

          </Routes>

        </Layout>
        <Footer />

      </Router>

    </ThemeProvider>

  );
}

export default App;
