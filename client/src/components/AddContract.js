import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";
import Loading from "./Loading";
import {
    Grid,
    FormControl,
    Container,
    Select,
    Button,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


    textField: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(5),
    },

}));

function ContainedButtons() {
    const classes = useStyles();
}



const styles = {

    button: {
        width: "100%",
        backgroundColor: "blue",
        margin: "10px"
    }



}

const AddContract = (props) => {
    const { action, id } = props;
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
    const [allUnitTypes, setAllUnitTypes] = useState(null);
    const [unitTypes, setUnitTypes] = useState(null);
    const [allUnits, setAllUnits] = useState(null);
    const [units, setUnits] = useState(null);
    const [allCustomers, setAllCustomers] = useState(null);
    const [customers, setCustomers] = useState(null);
    const [deposit, setDeposit] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/customers')
            .then((res) => {
                setAllCustomers(res.data)
                setCustomers(res.data.sort((a, b) => {
                    if (a.customer.lastName.toLowerCase() < b.customer.lastName.toLowerCase()) { return -1 };
                    return (a.customer.lastName.toLowerCase() > b.customer.lastName.toLowerCase() ? 1 : 0);
                }));
            })
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/units')

            .then((res) => {
                setUnits(res.data)
                setAllUnits(res.data)
            })
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/unitTypes')
            .then((res) => {
                setUnitTypes(res.data)
                setAllUnitTypes(res.data)
            })
            .catch((err) => console.log(err));

        if (action === 'update') {
            axios.get(`http://localhost:8000/api/contracts/${props.id}`)
                .then((res) => {
                    setInputs({
                        length: res.data.length,
                        moveInDate: res.data.moveInDate,
                        moveOutDate: res.data.moveInDate,
                        amount: res.data.monthlyAmount,
                        status: res.data.status,
                        depositAmount: res.data.deposit.depositAmount,
                        dateReceived: res.data.deposit.depositAmount,
                        paymentType: res.data.deposit.paymentType,
                        checkNum: res.data.deposit.checkNum,
                        depositPaid: res.data.deposit.depositPaid,
                        depositReturned: res.data.deposit.depositReturned,
                        depositNotes: res.data.deposit.notes,
                        unitTypeID: res.data.unitType._id,
                        customerID: res.data.checkNum,
                        unitID: res.data.unit._id,
                        notes: res.data.notes,
                    });
                    setDeposit(res.data.deposit._id);
                })
                .catch((err) => console.log(err));
        };
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
            unitType: { _id: inputs.unitTypeID },
            customer: { _id: inputs.customerID },
            unit: { _id: inputs.unitID },
            notes: inputs.notes,
        }
        if (action === 'create') {
            axios
                .post('http://localhost:8000/api/contracts/', newContract)
                .then((res) => {
                    navigate("/dashboard");
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }
        else if (action === "update") {
            axios
                .put(`http://localhost:8000/api/contracts/${id}`, newContract)
                .then((res) => {
                    navigate("/dashboard");
                })
                .catch((err) => {
                    console.log(err.response);
                });
        }
    }

    return (
        <>

            <Container fixed>
                <FormControl onSubmit={addContract} variant="outlined" style={styles} className="addContract">

                    <h3>Add a new contract:</h3>
                    <Grid container spacing={2} justify="space-around" direction="row" alignItems="flex-start">
                        <Grid container item justify="space-around">
                            <div className="contractInput">
                                <TextField variant="outlined" type="number" name="length" id="length" label="Contract Length (Months):" InputLabelProps={{ shrink: true, }} value={inputs.length} onChange={(event) => setInputs({ ...inputs, length: event.target.value })} />
                            </div>
                            <div style={{ gridColumnEnd: 'span 1' }} className="contractInput">
                                <TextField variant="outlined" type="date" name="moveInDate" label="Move in Date: " InputLabelProps={{ shrink: true, }} id="moveInDate" value={inputs.moveInDate} onChange={(event) => setInputs({ ...inputs, moveInDate: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid container item justify="space-around" >
                            <div className="contractInput">
                                <TextField variant="outlined" type="date" name="moveOutDate" label="Move Out Date:" InputLabelProps={{ shrink: true, }} id="moveOutDate" value={inputs.moveOutDate} onChange={(event) => setInputs({ ...inputs, moveOutDate: event.target.value })} />
                            </div>

                            <div className="contractInput">
                                <TextField variant="outlined" type="number" name="amount" id="amount" label="Monthly Amount: " InputLabelProps={{ shrink: true, }} value={inputs.amount} onChange={(event) => setInputs({ ...inputs, amount: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid container item justify="space-around">
                            <div className="contractInput">
                                <Select native name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                                    <option value="">Select Contract Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="active">Active</option>
                                    <option value="terminated">Terminated</option>
                                    <option value="completed">Completed</option>
                                </Select>
                            </div>

                            <div className="contractInput">
                                <TextField type="number" variant="outlined" name="depositAmount" id="depositAmount" label="Deposit Amount" InputLabelProps={{ shrink: true, }} value={inputs.depositAmount} onChange={(event) => setInputs({ ...inputs, depositAmount: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid container item justify="space-around">
                            <div className="contractInput">
                                <TextField type="date" id="dateReceived" htmlFor="dateReceived" label="Deposit Date Received:" variant="outlined" InputLabelProps={{ shrink: true, }} value={inputs.dateReceived} onChange={(event) => setInputs({ ...inputs, dateReceived: event.target.value })} />
                            </div>

                            <div className="contractInput">
                                <Select native name="paymentType" id="paymentType">
                                    <option value="">Select Payment Type:</option>
                                    <option value="cash">Cash</option>
                                    <option value="debit card">Debit Card</option>
                                    <option value="credit card">Credit Card</option>
                                    <option value="check">Check</option>
                                    <option value="transfer">Wire Transfer</option>
                                </Select>
                            </div>
                        </Grid>
                        <Grid container item justify="space-around">
                            <div className="contractInput">
                                <TextField type="number" name="checkNum" id="checkNum" InputLabelProps={{ shrink: true, }} variant="outlined" label="Check Number" value={inputs.checkNum} onChange={(event) => setInputs({ ...inputs, checkNum: event.target.value })} />
                            </div>
                            <div className="contractInput">
                                <Select native name="depositPaid" id="depositPaid" value={inputs.depositPaid} onChange={(event) => setInputs({ ...inputs, depositPaid: event.target.value })}>
                                    <option value="">Was the deposit paid?</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </Select>
                            </div>
                        </Grid>
                        <Grid container item justify="space-around">
                            <div className="contractInput">
                                <TextField variant="outlined" style={styles} type="number" name="depositReturned" InputLabelProps={{ shrink: true, }} id="depositReturned" label="Deposit Amount Returned" value={inputs.depositReturned} onChange={(event) => setInputs({ ...inputs, depositReturned: event.target.value })} />
                            </div>
                            <div className="contractInput">
                                <TextField variant="outlined" type="text" name="depositNotes" id="depositNotes" InputLabelProps={{ shrink: true, }} label="Deposit Notes" value={inputs.depositNotes} onChange={(event) => setInputs({ ...inputs, depositNotes: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid container item justify="space-around"  >
                            <div className="contractInput">
                                <Select native name="unitType" id="unitType" value={inputs.unitTypeID} onChange={(event) => setInputs({ ...inputs, unitTypeID: event.target.value })}>
                                    <option value="">Select Unit Type:</option>
                                    {unitTypes.map((unitType) => {
                                        return (
                                            <option value={unitType._id}>{unitType.name}</option>
                                        );
                                    })}
                                </Select>
                            </div>
                            <div className="contractInput">
                                <Select native name="customer" id="customer" value={inputs.customerID} onChange={(event) => setInputs({ ...inputs, customerID: event.target.value })}>
                                    <option value="">Select Customer:</option>
                                    {customers.map((customer) => {
                                        return (
                                            <option value={customer._id}>{customer.customer.firstName} {customer.customer.lastName}</option>
                                        );
                                    })}
                                </Select>
                            </div>
                        </Grid>
                        <Grid container item justify="space-around">
                            <div className="contractInput">
                                <Select native name="unit" id="unit" value={inputs.unitID} onChange={(event) => setInputs({ ...inputs, unitID: event.target.value })}>
                                    <option value="">Select Unit:</option>
                                    {units.map((unit) => {
                                        return (
                                            <option value={unit._id}>{unit.name}</option>
                                        );
                                    })}
                                </Select>
                            </div>
                            <div className="contractInput">
                                <TextField variant="outlined" type="text" name="notes" id="notes" InputLabelProps={{ shrink: true, }} label="Contract Notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid>


                            <Button variant="contained" color="secondary" href="#contained-buttons" onClick={(event) => navigate('/')}>Cancel</Button>
                            <Button variant="contained" color="primary" href="#contained-buttons">Submit</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </Container>

        </>
    );
};

export default AddContract;
