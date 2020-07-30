import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";

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

    console.log(unit);

    return (
        <>
            <h3 style={{ margin: '5px 0' }}>Unit: {unit.name}</h3>
            <h4 style={{ margin: '5px 0' }}>Status: <span style={styleStatus()}>{unit.status}</span></h4>
            <button style={{ margin: '0 0 5px 0' }}>Edit</button>
            <section>

                <table style={{ display: 'inline-block', backgroundColor: '#B8D2E3', padding: '10px 25px' }}>
                    <h3 style={{ display: 'inline-block', margin: '0 0 5px 0' }}>Unit Type: <span style={{ fontWeight: 'normal' }}>{unit.unitType.name}</span></h3>
                    <thead>
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