import React from 'react';
import axios from 'axios';
import AdminBar from '../components/AdminBar';
import AddContract from "../components/AddContract";

const AdminNewContract = (props) => {
    return (
        <>
            <AdminBar />
            <AddContract />
        </>
    );
};

export default AdminNewContract;