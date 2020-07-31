import React from 'react';
import axios from 'axios';
import AdminBar from '../components/AdminBar';
import AddUnit from '../components/AddUnit';

const EditUnit = (props) => {
    const { id } = props;
    return (
        <>
            <AdminBar />
            <AddUnit action="update" id={id} />
        </>
    );
};

export default EditUnit;