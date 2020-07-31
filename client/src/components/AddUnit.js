import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Loading from "./Loading";

const AddUnit = (props) => {
    const [inputs, setInputs] = useState({
        name: "",
        status: "",
        unitTypeID: "",
        propertyID: "",
        notes: "",
    });
    const [unitTypes, setUnitTypes] = useState(null);
    const [properties, setProperties] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/unitTypes')
            .then((res) => setUnitTypes(res.data))
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/properties')
            .then((res) => setProperties(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (unitTypes === null || properties === null) {
        return (
            <Loading />
        );
    };

    const addUnit = (event) => {
        event.preventDefault();
        const newUnit = {
            name: inputs.name,
            status: inputs.status,
            unitType: { _id: inputs.unitTypeID },
            property: { _id: inputs.propertyID },
            notes: inputs.notes,
        };
        // let property = properties.filter((property) => property._id === inputs.propertyID);
        let property = null;
        let units = null;
        axios.get('http://localhost:8000/api/properties/' + inputs.propertyID)
            .then((res) => {
                property = res.data;
                units = res.data.unit;
                let newUnits = { unit: units.map((unit) => { return ({ _id: unit }) }) }
                axios.post('http://localhost:8000/api/units', newUnit)
                    .then((res) => {
                        units.push(res.data._id);
                        let newUnits = { unit: units.map((unit) => { return ({ _id: unit }) }) }
                        axios.put('http://localhost:8000/api/properties/' + property._id, newUnits)
                            .then(res => navigate('/admin/units'))
                            .catch((err) => console.log(err.response));
                    })
                    .catch((err) => console.log(err.response));
            })
            .catch((err) => console.log(err.response));
    }

    return (
        <>
            <form onSubmit={addUnit} className='addCustomer'>
                <label htmlFor="name">Unit Name/Number:</label>
                <input type="text" name="name" id="name" value={inputs.name} onChange={(event) => setInputs({ ...inputs, name: event.target.value })} />
                <label htmlFor="status">Unit Status:</label>
                <select name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                    <option value="">Select a unit status:</option>
                    <option value="available">Available</option>
                    <option value="rented">Rented</option>
                    <option value="inactive">Inactive</option>
                </select>
                <label htmlFor="unitType">Unit Type:</label>
                <select name="unitType" id="unitType" value={inputs.unitTypeID} onChange={(event) => setInputs({ ...inputs, unitTypeID: event.target.value })}>
                    <option value="">Select a Unit Type</option>
                    {unitTypes.map((unitType) => {
                        return (
                            <option key={unitType._id} value={unitType._id}>{unitType.name}</option>
                        );
                    })}
                </select>
                <label htmlFor="property">Property:</label>
                <select name="property" id="property" value={inputs.propertyID} onChange={(event) => setInputs({ ...inputs, propertyID: event.target.value })}>
                    <option value="" disabled={true}>Select Property</option>
                    {properties.map((property) => {
                        return (
                            <option value={property._id}>{property.propertyName}</option>
                        );
                    })}
                </select>
                <label htmlFor="notes">Notes:</label>
                <input type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                <button type="button" onClick={(event) => navigate('/admin/units')}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    );
};
export default AddUnit;