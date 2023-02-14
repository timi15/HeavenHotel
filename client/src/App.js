import './asserts/css/style.css'
import './App.css';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sights } from './pages/Sights';
import { Contact } from './pages/Contact';
import { Error } from './components/Error';
import { Reservation } from './pages/Reservation';
import { Rooms } from './pages/Rooms';
import { GYIK } from './components/GYIK';
import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUp';
import { Aszf } from './components/Aszf.jsx';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './theme/Theme';
import { Adatvedelem } from './components/Adatvedelem';




function App() {
  return (
    
    <ThemeProvider theme={appTheme}>
      

        <Router>
          <Layout>
            <Routes>


              <Route path='/' element={<Home />} />
              <Route path='/szobak' element={<Rooms />} />
              <Route path='/latnivalok' element={<Sights />} />
              <Route path='/latnivalok/foglalas' element={<Reservation />} />
              <Route path='/foglalas' element={<Reservation />} />
              <Route path='/kapcsolatok' element={<Contact />} />

              <Route path='/adatkezelesi_tajekoztato' element={<Adatvedelem />} />
              <Route path='/altalanos_szerzodesi_feltetelek' element={<Aszf />} />
              <Route path='/gyakori_kerdesek_es_valaszok' element={<GYIK />} />

              <Route path='/regisztracio' element={<SignUp />} />
              <Route path='/bejelentkezes' element={<LogIn />} />



              <Route path='*' element={<Error />} />




            </Routes>

          </Layout>
          <Footer />



        </Router>
     
    </ThemeProvider>
    
    

  );
}

export default App;
