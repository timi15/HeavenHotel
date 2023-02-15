import './asserts/css/style.css'
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { Latnivalok } from './pages/Latnivalok';
import { Error } from './components/Error';
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



function App() {
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



            <Route path='*' element={<Error />} />

          </Routes>

        </Layout>
        <Footer />

      </Router>

    </ThemeProvider>

  );
}

export default App;
