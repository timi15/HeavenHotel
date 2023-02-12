import './asserts/css/style.css'
import './App.css';
import { Footer } from './components/Footer';
import {  Layout } from './components/Layout';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sights } from './pages/Sights';
import { Contact } from './pages/Contact';
import { Error } from './components/Error';
import { DataManagement } from './components/DataManagement';
import { Reservation } from './pages/Reservation';
import { Rooms } from './pages/Rooms';
import { GYIK } from './components/GYIK';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { Aszf } from './components/Aszf.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/sights' element={<Sights />} />
          <Route  path='/sights/reservation' element={<Reservation />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/reservation' element={<Reservation />} />
          <Route  path='/datamanagement' element={<DataManagement />} />
          <Route  path='/gyik' element={<GYIK />} />
          <Route  path='/rooms' element={<Rooms/>} />
          <Route  path='/login' element={<LogIn/>} />
          <Route  path='/signup' element={<SignUp/>} />
          <Route  path='/aszf' element={<Aszf/>} />

          <Route  path='*' element={<Error />} />

          

        </Routes>
      
      </Layout>
      <Footer />  
      









    </Router>

  );
}

export default App;
