import React, { useState, useEffect } from "react"
import Loading from "../components/Loading";
import { Link } from "@reach/router";

const Dashboard = (props) => {
    const { property } = props;
    const [units, setUnits] = useState(null);

    useEffect(() => {
        setUnits(property.unit.sort((a, b) => {
            if (a.name < b.name) { return -1 };
            return (a.name > b.name ? 1 : 0);
        }))
    }, [property]);

    // If there are no authors display this
    if (property == null || units === null) {
        return (
            <Loading />
        );
    };

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

    return (
        <div>
            <p>{property.propertyName}</p>
            <p>{property.address.street}</p>
            <table className='dashboardUnits'>
                <thead>
                    <tr>
                        <th>Unit Number</th>
                        <th>Unit Type</th>
                        <th>Bedrooms</th>
                        <th>Bathrooms</th>
                        <th>Square Footage</th>
                        <th>Rental Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <div>
                    <tbody>
                        {units.map((apartment) => {
                            return (
                                <tr key={apartment._id}>
                                    <td><Link to={`/units/details/${apartment._id}`}>{apartment.name}</Link></td>
                                    <td>{apartment.unitType.name}</td>
                                    <td>{apartment.unitType.bedrooms}</td>
                                    <td>{apartment.unitType.bathrooms}</td>
                                    <td>{apartment.unitType.squareFootage} sqft</td>
                                    <td>${apartment.unitType.rentalAmount}</td>
                                    <td style={styleStatus(apartment.status)}>{apartment.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </div>
            </table>
        </div>
    )


}
export default Dashboard;