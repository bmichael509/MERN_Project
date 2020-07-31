import React from 'react';
import axios from 'axios';
import AdminBar from '../components/AdminBar';
import UnitTypeForm from '../components/UnitTypeForm';

const AdminNewUnitType = (props) => {
    return (
        <>
            <AdminBar />
            <UnitTypeForm action="create" />
        </>
    );
};

export default AdminNewUnitType;