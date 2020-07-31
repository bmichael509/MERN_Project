import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AdminBar from '../components/AdminBar';
import Loading from '../components/Loading';

const ViewUnitTypes = (props) => {
    const [unitTypes, setUnitTypes] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8000/api/unitTypes')
            .then((res) => setUnitTypes(res.data.sort((a, b) => {
                if (a.name < b.name) { return -1 };
                return (a.name > b.name ? 1 : 0);
            })))
            .catch((err) => console.log(err));
    }, []);

    console.log(unitTypes);

    if (unitTypes === null) {
        return (
            <>
                <AdminBar />
                <h2>Unit Types</h2>
                <Loading />
            </>
        )
    };

    const numOfUnits = (units, unitTypeID) => {
        return (units.filter((unit) => unit.unitType === unitTypeID).length);
    };


    return (
        <>
            <AdminBar />
            <h2>Unit Types</h2>
            <Link className="new" to="/admin/unitTypes/new">New</Link>
            <table className='dashboardUnits'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Property</th>
                        <th>Bedrooms</th>
                        <th>Bathrooms</th>
                        <th>Square Footage</th>
                        <th>Price/Month</th>
                        <th>Number of Units</th>
                    </tr>
                </thead>
                <tbody>
                    {unitTypes.map((type) => {
                        return (
                            <tr key={type._id}>
                                <td>{type.name}</td>
                                <td>{type.property.propertyName}</td>
                                <td>{type.bedrooms}</td>
                                <td>{type.bathrooms}</td>
                                <td>{type.squareFootage} sqft</td>
                                <td>${type.rentalAmount}</td>
                                <td>{numOfUnits(type.property.unit, type._id)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ViewUnitTypes;