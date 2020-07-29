import React from 'react';
import { Link, Router, Redirect } from '@reach/router';
import './App.css';
import ViewCustomers from './views/ViewCustomers';
import ViewContracts from './views/ViewContracts';


function App() {
  return (
    <>
      <Router>
        <ViewCustomers path="/admin/customers" />
        <ViewContracts path="/admin/contracts" />
      </Router>
    </>
  );
}

export default App;
