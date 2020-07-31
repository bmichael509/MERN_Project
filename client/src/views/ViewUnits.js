import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AdminBar from '../components/AdminBar';
import Loading from '../components/Loading';

const ViewUnits = (props) => {
    const [units, setUnits] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8000/api/units')
            .then((res) => setUnits(res.data.sort((a, b) => {
                if (a.name < b.name) { return -1 };
                return (a.name > b.name ? 1 : 0);
            })))
            .catch((err) => console.log(err));
    }, []);

    const styleStatus = (status) => {
        if (status === 'available') {
            return { color: '#3AFF00' }
        }
        else if (status === 'rented') {
            return { color: 'red' }
        }
        else {
            return { color: 'black' }
        };
    };

    if (units === null) {
        return (
            <>
                <AdminBar />
                <h2>Units</h2>
                <Loading />
            </>
        )
    }
    return (
        <>
            <AdminBar />
            <h2>Units</h2>
            <Link className="new" to="/admin/units/new">New</Link>
            <table className='dashboardUnits'>
                <thead>
                    <tr>
                        <th>Unit</th>
                        <th>Property</th>
                        <th>Issues</th>
                        <th>Price/Month</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {units.map((unit) => {
                        return (
                            <tr>
                                <td><Link to={`/units/details/${unit._id}`}>{unit.name}</Link></td>
                                <td>{unit.property.propertyName}</td>
                                <td>{unit.issue.length}</td>
                                <td>${unit.unitType.rentalAmount}</td>
                                <td style={styleStatus(unit.status)}>{unit.status}</td>
                                <td>{unit.notes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ViewUnits;