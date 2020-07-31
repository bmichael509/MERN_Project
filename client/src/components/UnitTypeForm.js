import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Loading from "./Loading";

const UnitTypeForm = (props) => {
    const { action } = props;
    const [inputs, setInputs] = useState({
        name: "",
        bathrooms: "",
        bedrooms: "",
        squareFootage: "",
        rentalAmount: "",
        propertyID: "",
        status: "",
        notes: "",
    })
    const [properties, setProperties] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/properties')
            .then((res) => setProperties(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (properties === null) {
        return (
            <Loading />
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (action === "create") {
            const newUnitType = {
                name: inputs.name,
                bathrooms: inputs.bathrooms,
                bedrooms: inputs.bedrooms,
                squareFootage: inputs.squareFootage,
                rentalAmount: inputs.rentalAmount,
                property: { _id: inputs.propertyID },
                status: inputs.status,
                notes: inputs.notes,
            };
            axios.post('http://localhost:8000/api/unitTypes', newUnitType)
                .then((res) => navigate('/'))
                .catch((err) => console.log(err));
        }
        else if (action === "update") {
            console.log('update function goes here');
        };
    };

    return (
        <>
            <form style={{ display: 'inline-block', width: '50%' }} onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={inputs.name} onChange={(event) => setInputs({ ...inputs, name: event.target.value })} />
                <br />
                <label htmlFor="bathrooms">Bathrooms: </label>
                <input type="number" name="bathrooms" id="bathrooms" value={inputs.bathrooms} onChange={(event) => setInputs({ ...inputs, bathrooms: event.target.value })} />
                <br />
                <label htmlFor="bedrooms">Bedrooms: </label>
                <input type="text" name="bedrooms" id="bedrooms" value={inputs.bedrooms} onChange={(event) => setInputs({ ...inputs, bedrooms: event.target.value })} />
                <br />
                <label htmlFor="squareFootage">Square Footage: </label>
                <input type="number" name="squareFootage" id="squareFootage" value={inputs.squareFootage} onChange={(event) => setInputs({ ...inputs, squareFootage: event.target.value })} />
                <br />
                <label htmlFor="amount">Rental Amount: </label>
                <input type="number" name="amount" id="amount" value={inputs.rentalAmount} onChange={(event) => setInputs({ ...inputs, rentalAmount: event.target.value })} />
                <br />
                <label htmlFor="property">Property: </label>
                <select name="property" id="property" value={inputs.propertyID} onChange={(event) => setInputs({ ...inputs, propertyID: event.target.value })}>
                    <option value="">Select Property </option>
                    {properties.map((property) => {
                        return (
                            <option value={property._id}>{property.propertyName}</option>
                        );
                    })}
                </select>
                <br />
                <label htmlFor="status">Status: </label>
                <input type="text" name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })} />
                <br />
                <label htmlFor="notes">Notes: </label>
                <input type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                <br />
                <button onClick={(event) => navigate('/')}>Cancel</button>
                <br />
                <button>Submit</button>
            </form>
        </>
    );
};

export default UnitTypeForm;