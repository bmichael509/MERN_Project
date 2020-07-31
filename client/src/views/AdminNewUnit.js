import React from 'react';
import axios from 'axios';
import AdminBar from '../components/AdminBar';
import AddUnit from '../components/AddUnit';

const AdminNewUnit = (props) => {
    return (
        <>
            <AdminBar />
            <AddUnit action="create" />
        </>
    );
};

export default AdminNewUnit;