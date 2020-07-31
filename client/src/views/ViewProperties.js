import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AdminBar from '../components/AdminBar';
import Loading from '../components/Loading';

const ViewProperties = (props) => {
    const [properties, setProperties] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8000/api/properties')
            .then((res) => setProperties(res.data))
            .catch((err) => console.log(err));
    }, [])

    if (properties === null) {
        return (
            <>
                <AdminBar />
                <h2>Properties</h2>
                <Loading />
            </>
        )
    }

    console.log(properties);

    return (
        <>
            <AdminBar />
            <h2>Properties</h2>
            <Link className="new" to="/admin/properties/new">New</Link>
            <table className='dashboardUnits'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Units</th>
                        <th>Street</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property) => {
                        return (
                            <tr key={property._id}>
                                <td>{property.propertyName}</td>
                                <td>{property.unit.length}</td>
                                <td>{property.address.street}</td>
                                <td>{property.address.city}, {property.address.state} {property.address.zipCode}</td>
                                <td>{property.address.country}</td>
                                <td>{property.status}</td>
                                <td>{property.notes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ViewProperties;