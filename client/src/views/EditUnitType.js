import React from 'react';
import axios from 'axios';
import AdminBar from '../components/AdminBar';
import UnitTypeForm from '../components/UnitTypeForm';

const EditUnitType = (props) => {
    const { id } = props;
    return (
        <>
            <AdminBar />
            <UnitTypeForm action="update" id={id} />
        </>
    );
};

export default EditUnitType;