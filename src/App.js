import { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/layout/Navbar'
import Clinics from './pages/Clinics';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound';
import Alert from './components/layout/Alert'
// State providers
import AlertState from './context/alert/AlertState'
// Context
import SwaggerContext from './context/swagger-nfz/swaggerContext';
// Styles
import './App.css';

function App() {
  const swaggerContext = useContext(SwaggerContext)
  const { getClinics, clinics, loading } = swaggerContext
  
  useEffect(() => {
    getClinics();

    // eslint-disable-next-line
  },[])

  return (
    <AlertState>
      <Router>
        <Fragment>
          <Alert />
          <Navbar />
            <Routes >
              <Route exact path='/' element={<Clinics clinics={clinics} loading={loading} />} />
              <Route exact path='/statistics' element={<Statistics clinics={clinics} loading={loading} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </Fragment>
      </Router>
    </AlertState>
  );
}

export default App;
