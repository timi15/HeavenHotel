import './asserts/css/style.css'
import './App.css';
import { Footer } from './components/Footer';
import { Header, Layout } from './components/Layout';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sights } from './pages/Sights';
import { Contact } from './pages/Contact';
import { Error } from './components/Error';
import { DataManagement } from './components/DataManagement';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/sights' element={<Sights />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/datamanagement' element={<DataManagement />} />


          <Route  path='*' element={<Error />} />

          

        </Routes>
      
      </Layout>
      <Footer />  
      









    </Router>

  );
}

export default App;
