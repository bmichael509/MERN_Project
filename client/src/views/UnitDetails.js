import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { navigate } from "@reach/router";

const UnitDetails = (props) => {
    const [unit, setUnit] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/units/${props._id}`)
            .then((res) => setUnit(res.data))
            .catch((err) => console.log(err));
    }, [props._id]);

    const styleStatus = () => {
        if (unit.status === 'available') {
            return { color: 'green' }
        }
        else if (unit.status === 'rented') {
            return { color: 'red' }
        }
        else {
            return { color: 'black' }
        };
    };

    if (unit === null) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <h1 style={{ margin: '5px 0' }}>Unit: {unit.name}</h1>
            <h2 style={{ margin: '5px 0' }}>Status: <span style={styleStatus()}>{unit.status}</span></h2>
            <button style={{ margin: '0 0 5px 0' }} onClick={(event) => navigate(`/units/${props._id}/edit`)}>Edit</button>
            <section>
                <table className="dashboardUnits">
                    <thead>
                        <tr>
                            <h2>Unit Type: <span>{unit.unitType.name}</span></h2>
                        </tr>
                        <tr>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Price/Month</th>
                            <th>Square Feet</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{unit.unitType.bedrooms}</td>
                            <td>{unit.unitType.bathrooms}</td>
                            <td>${unit.unitType.rentalAmount}</td>
                            <td>{unit.unitType.squareFootage} sqft</td>
                            <td>{unit.unitType.status}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default UnitDetails;