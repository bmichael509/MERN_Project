import React from 'react';
import { Link, Router, Redirect } from '@reach/router';
import './App.css';
import ViewCustomers from './views/ViewCustomers';


function App() {
  return (
    <>
      <Router>
        <ViewCustomers path="/admin/customers" />
      </Router>
    </>
  );
}

export default App;
