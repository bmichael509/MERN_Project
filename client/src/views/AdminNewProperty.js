import React from 'react';
import axios from 'axios';
import AdminBar from '../components/AdminBar';
import AddProperty from '../components/AddProperty';

const AdminNewProperty = (props) => {
    return (
        <>
            <AdminBar />
            <AddProperty action="create" />
        </>
    );
};

export default AdminNewProperty;