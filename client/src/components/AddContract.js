import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";
import Loading from "./Loading";

const AddContract = (props) => {
    const [inputs, setInputs] = useState({
        length: "",
        moveInDate: "",
        moveOutDate: "",
        amount: "",
        status: "",
        depositAmount: "",
        dateReceived: "",
        paymentType: "",
        checkNum: "",
        depositPaid: "",
        depositReturned: "",
        depositNotes: "",
        unitTypeID: "",
        customerID: "",
        unitID: "",
        notes: "",
    });
    const [unitTypes, setUnitTypes] = useState(null);
    const [units, setUnits] = useState(null);
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/customers')
            .then((res) => {
                setCustomers(res.data.sort((a, b) => {
                    if (a.customer.lastName.toLowerCase() < b.customer.lastName.toLowerCase()) { return -1 };
                    return (a.customer.lastName.toLowerCase() > b.customer.lastName.toLowerCase() ? 1 : 0);
                }));
            })
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/units')
            .then((res) => setUnits(res.data))
            .cath((err) => console.log(err));

        axios.get('http://localhost:8000/api/unitTypes')
            .then((res) => setUnitTypes(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (unitTypes === null || units === null || customers === null) {
        return (
            <Loading />
        );
    };

    const addContract = (event) => {
        event.preventDefault();
        const newContract = {
            length: inputs.length,
            moveInDate: inputs.moveInDate,
            moveOutDate: inputs.moveOutDate,
            monthlyAmount: inputs.amount,
            status: inputs.status,
            deposit: {
                depositAmount: inputs.depositAmount,
                dateReceived: inputs.dateReceived,
                paymentType: inputs.paymentType,
                checknumber: inputs.checkNum,
                depositPaid: inputs.depositPaid,
                depositReturned: inputs.depositReturned,
                notes: inputs.depositNotes,
            },
            unitType: inputs.unitTypeID,
            customer: inputs.customerID,
            unit: inputs.unitID,
            notes: inputs.notes,
        };

        axios.post('http://localhost:8000/api/contracts', newContract)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <form onSubmit={addContract}>
                <h4>Add a new contract:</h4>
                <div className="contractInput">
                    <input type="number" name="length" id="length" placeholder="Contract Length (Months)" value={inputs.length} onChange={(event) => setInputs({ ...inputs, length: event.target.value })} />
                </div>
                <div className="contractInput">
                    <label htmlFor="moveInDate">Move In Date:</label>
                    <input type="date" name="moveInDate" id="moveInDate" value={inputs.moveInDate} onChange={(event) => setInputs({ ...inputs, moveInDate: event.target.value })} />
                </div>
                <div className="contractInput">
                    <label htmlFor="moveOutDate">Move In Date:</label>
                    <input type="date" name="moveOutDate" id="moveOutDate" value={inputs.moveOutDate} onChange={(event) => setInputs({ ...inputs, moveOutDate: event.target.value })} />
                </div>
                <div className="contractInput">
                    <input type="number" name="amount" id="amount" placeholder="Monthly Amount" value={inputs.amount} onChange={(event) => setInputs({ ...inputs, amount: event.target.value })} />
                </div>
                <div className="contractInput">
                    <select name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                        <option value="">Select contract status</option>
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="terminated">Terminated</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="contractInput">
                    <input type="number" name="depositAmount" id="depositAmount" placeholder="Deposit Amount" value={inputs.depositAmount} onChange={(event) => setInputs({ ...inputs, depositAmount: event.target.value })} />
                </div>
                <div className="contractInput">
                    <label htmlFor="dateReceived">Deposit Date Received:</label>
                    <input type="date" name="dateReceived" id="dateReceived" value={inputs.dateReceived} onChange={(event) => setInputs({ ...inputs, dateReceived: event.target.value })} />
                </div>
                <div className="contractInput">
                    <select name="paymentType" id="paymentType">
                        <option value="">Select Payment Type:</option>
                        <option value="cash">Cash</option>
                        <option value="debit card">Debit Card</option>
                        <option value="credit card">Credit Card</option>
                        <option value="check">Check</option>
                        <option value="transfer">Wire Transfer</option>
                    </select>
                </div>
                <div className="contractInput">
                    <input type="number" name="checkNum" id="checkNum" placeholder="Check Number" value={inputs.checkNum} onChange={(event) => setInputs({ ...inputs, checkNum: event.target.value })} />
                </div>
                <div className="contractInput">
                    <select name="depositPaid" id="depositPaid" value={inputs.depositPaid} onChange={(event) => setInputs({ ...inputs, depositPaid: event.target.value })}>
                        <option value="">Was the deposit paid?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="contractInput">
                    <input type="number" name="depositReturned" id="depositReturned" placeholder="Deposit Amount Returned" value={inputs.depositReturned} onChange={(event) => setInputs({ ...inputs, depositReturned: event.target.value })} />
                </div>
                <div className="contractInput">
                    <input type="text" name="depositNotes" id="depositNotes" placeholder="Deposit Notes" value={inputs.depositNotes} onChange={(event) => setInputs({ ...inputs, depositNotes: event.target.value })} />
                </div>
                <div className="contractInput">
                    <select name="unitType" id="unitType" value={inputs.unitTypeID} onChange={(event) => setInputs({ ...inputs, unitTypeID: event.target.value })}>
                        <option value="">Select Unit Type:</option>
                        {unitTypes.map((unitType) => {
                            return (
                                <option value={unitType._id}>{unitType.name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="contractInput">
                    <select name="customer" id="customer" value={inputs.customerID} onChange={(event) => setInputs({ ...inputs, customerID: event.target.value })}>
                        <option value="">Select Customer:</option>
                        {customers.map((customer) => {
                            return (
                                <option value={customer._id}>{customer.customer.firstName} {customer.customer.lastName}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="contractInput">
                    <select name="unit" id="unit" value={inputs.unitID} onChange={(event) => setInputs({ ...inputs, unitID: event.target.value })}>
                        <option value="">Select Unit:</option>
                        {units.map((unit) => {
                            return (
                                <option value={unit._id}>{unit.name}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="contractInput">
                    <input type="text" name="notes" id="notes" placeholder="Contract Notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                </div>
                <button type="button" onClick={(event) => navigate('/')}>Cancel</button>
                <button>Submit</button>
            </form>
        </>
    );
};

export default AddContract;