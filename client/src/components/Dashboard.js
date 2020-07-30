import React, { useState, useEffect } from "react"
import axios from "axios"
import Loading from "../components/Loading";

const Dashboard = (props) => {
    const { property } = props;
    const [units, setUnits] = useState(null);

    useEffect(() => {
        setUnits(property.unit.sort((a, b) => {
            if (a.name < b.name) { return -1 };
            return (a.name > b.name ? 1 : 0);
        }))
    }, []);

    // If there are no authors display this
    if (property == null || units === null) {
        return (
            <Loading />
        );
    };


    console.log(units, "these are all of the units");

    return (
        <div>
            <p>{property.propertyName}</p>
            <p>{property.address.street}</p>
            <table>
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
                <tbody>
                    {units.map((apartment) => {
                        return (
                            <tr key={apartment.unitType._id}>
                                <td>{apartment.name}</td>
                                <td>{apartment.unitType.name}</td>
                                <td>{apartment.unitType.bedrooms}</td>
                                <td>{apartment.unitType.bathrooms}</td>
                                <td>{apartment.unitType.squareFootage}</td>
                                <td>{apartment.unitType.rentalAmount}</td>
                                <td>{apartment.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )


}
export default Dashboard;