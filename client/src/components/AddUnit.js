import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const AddUnit = (props) => {
    const [inputs, setInputs] = useState({
        name: "",
        contractID: "",
        status: "",
        unitTypeID: "",
        propertyID: "",
        issueID: "",
        notes: "",
    });
    const [contracts, setContracts] = useState(null);
    const [unitTypes, setUnitTypes] = useState(null);
    const [properties, setProperties] = useState(null);
    const [issues, setIssues] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/unitTypes')
            .then((res) => setUnitTypes(res.data))
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/issues')
            .then((res) => setIssues(res.data))
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/properties')
            .then((res) => setProperties(res.data))
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/contracts')
            .then((res) => setContracts(res.data))
            .catch((err) => console.log(err));
    });

    if (contracts === null || unitTypes === null || properties === null || issues === null) {
        return (
            <Location />
        );
    };

    const addUnit = (event) => {
        event.preventDefault();
        const newUnit = {
            name: inputs.name,
            contract: inputs.contractID,
            status: inputs.status,
            unitType: inputs.unitTypeID,
            property: inputs.propertyID,
            issue: inputs.issueID,
            notes: inputs.notes,
        };
        axios.post('http://localhost:8000/api/units', newUnit)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <form onSubmit={addUnit}>
                <label htmlFor="name">Unit Name/Number:</label>
                <input type="text" name="name" id="name" value={inputs.name} onChange={(event) => setInputs({ ...inputs, name: event.target.value })} />
                <label htmlFor="contract">Unit Contract:</label>
                <select name="contract" id="contract" value={inputs.contractID} onChange={(event) => setInputs({ ...inputs, contractID: event.target.value })}>
                    <option value="">Select Contract:</option>
                    {contracts.map((contract) => {
                        return (
                            <option value={contract._id}>{contract.customer.customer.lastName} {contract.unit.name}</option>
                        );
                    })}
                </select>
                <label htmlFor="status">Unit Status:</label>
                <select name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                    <option value="">Select a unit status:</option>
                    <option value="available">Available</option>
                    <option value="rented">Rented</option>
                    <option value="pending">Pending</option>
                </select>
                <label htmlFor="unitType">Unit Type:</label>
                <select name="unitType" id="unitType" value={inputs.unitTypeID} onChange={(event) => setInputs({ ...inputs, unitTypeID: event.target.value })}>
                    <option value="">Select a Unit Type</option>
                    {unitTypes.map((unitType) => {
                        return (
                            <option value={unitType._id}>{unitType.name}</option>
                        );
                    })}
                </select>
                <label htmlFor="property">Property:</label>
                <select name="property" id="property" value={inputs.propertyID} onChange={(event) => setInputs({ ...inputs, propertyID: event.target.value })}>
                    <option value="" disabled={true}>Select Property</option>
                    {properties.map((property) => {
                        return (
                            <option value={property._id}>{property.name}</option>
                        );
                    })}
                </select>
                <label htmlFor="issue">Issue:</label>
                <select name="issue" id="issue" value={inputs.issueID} onChange={(event) => setInputs({ ...inputs, issueID: event.target.value })}>
                    <option value="" disabled={true}>Select Issue</option>
                    {issues.map((issue) => {
                        return (
                            <option value={issue._id}>{issue.name}</option>
                        );
                    })}
                </select>
                <label htmlFor="notes">Notes:</label>
                <input type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                <button type="button" onClick={(event) => navigate('/')}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    );
};

export default AddUnit;