import React from 'react';
import { Link, Router, Redirect } from '@reach/router';
import './App.css';
import AddCustomer from './components/AddCustomer';

function App() {
  return (
    <>
      <Router>
        <AddCustomer path="/customers/new" />
      </Router>
    </>
  );
}

export default App;
