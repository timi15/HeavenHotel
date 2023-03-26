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
import { SzobakKezelese } from './pages/admin/szobak/SzobakKezelese';
import { SzobatipusModositas } from './pages/admin/szobak/SzobatipusModositas';
import { BookingContext } from './context/booking/BookingContext';
import { FoglalasokKezelese } from './pages/admin/foglalasok/FoglalasokKezelese';
import { SzobaModositas } from './pages/admin/szobak/SzobaModositas';


function App() {
  const { handleSet: handleSetUsers } = useContext(UserContext);
  const { handleSet: handleSetRoomTypes } = useContext(RoomTypeContext);
  const { handleSet: handleSetRooms } = useContext(RoomContext);
  const { handleSet: handleSetBooking } = useContext(BookingContext);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const [roomtypes, rooms, users, reservations] = await Promise.all([
        axios.get('http://localhost:8080/roomtypes', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
        axios.get('http://localhost:8080/rooms', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
        axios.get('http://localhost:8080/users', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
        axios.get('http://localhost:8080/reservations', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
      ]);
      handleSetRoomTypes(roomtypes.data);
      handleSetRooms(rooms.data);
      handleSetUsers(users.data);
      handleSetBooking(reservations.data);
    };
    fetchData();
  }, []);

  return (

    <ThemeProvider theme={appTheme}>

      <Router>
        <Layout>
          <Routes>

            <Route path='/' element={<Kezdooldal />} />
            <Route path='/szobak' element={<Szobak />} />
            <Route path='/latnivalok' element={<Latnivalok />} />
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

                  <Route path='/adminfelulet/szobak' element={<SzobakKezelese />} />
                  <Route path='/adminfelulet/szobatipusok/modositas/:id' element={<SzobatipusModositas />} />
                  <Route path='/adminfelulet/szobak/modositas/:id' element={<SzobaModositas />} />

                  <Route path='/adminfelulet/foglalasok' element={<FoglalasokKezelese />} />
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
