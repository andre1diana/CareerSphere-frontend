import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import { AuthProvider } from './context/AuthContext';
import { UsersProvider } from './context/UsersContext';
import { JobOfferProvider } from './context/JobOfferContext'; 
import RoutesComponent from './components/RoutesComponent';

function App() {
  return (
    <div className='page-container'>

        <AuthProvider>
          <UsersProvider>
          <JobOfferProvider>
            <RoutesComponent />
          </JobOfferProvider>
          </UsersProvider>
        </AuthProvider>
    </div>
  );
}

export default App;
