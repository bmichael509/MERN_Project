import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { navigate } from "@reach/router";

const UnitTypeDetails = (props) => {
    const [unitType, setUnitType] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/unitTypes/${props._id}`)
            .then((res) => setUnitType(res.data))
            .catch((err) => console.log(err));
    }, [props._id]);

    console.log(unitType);

    if (unitType === null) {
        return (
            <Loading />
        );
    };

    const numOfUnits = (units) => {
        console.log('helo');
        return (units.filter((unit) => unit.unitType === unitType._id).length)
    }

    return (
        <>
            <h1 style={{ margin: '10px 0' }}>Unit Type: {unitType.name}</h1>
            <h2 style={{ margin: '10px 0' }}>Property: {unitType.property.propertyName}</h2>
            <button style={{ margin: '0 0 5px 0' }} onClick={(event) => navigate(`/unitType/${props._id}/edit`)}>Edit</button>
            <section>
                <table className="dashboardUnits">
                    <thead>
                        <tr>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Price/Month</th>
                            <th>Square Feet</th>
                            <th>Status</th>
                            <th>Number of Units</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{unitType.bedrooms}</td>
                            <td>{unitType.bathrooms}</td>
                            <td>${unitType.rentalAmount}</td>
                            <td>{unitType.squareFootage} sqft</td>
                            <td>{unitType.status}</td>
                            <td>{numOfUnits(unitType.property.unit)}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default UnitTypeDetails;