import React, { useState, useEffect } from "react"
import axios from "axios"

const Dashboard = (props) => {
    const [property, setProperty] = useState(null)
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/propertyUnits")
            .then((res) => {
                setProperty(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // If there are no authors display this
    if (property == null) {
        return (<div>No Units Found</div>)
    }

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
                    </tr>
                </thead>
                <tbody>
                    {property.unit.map((apartment) => {
                        return (
                            <tr key={apartment.unitType._id}>
                                <td>{apartment.unitNum}</td>
                                <td>{apartment.unitType.name}</td>
                                <td>{apartment.unitType.bedrooms}</td>
                                <td>{apartment.unitType.bathrooms}</td>
                                <td>{apartment.unitType.squareFootage}</td>
                                <td>{apartment.unitType.rentalAmount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )


}
export default Dashboard;