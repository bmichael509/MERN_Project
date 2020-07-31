import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import {
    Grid,
    FormControl,
    Container,
    Select,
    Button,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddCustomer = (props) => {
    const { action, id } = props;
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        street: "",
        unitNum: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        status: "",
        financialStatus: "",
        infoVerifiedBy: "",
        notes: "",
        financialNotes: "",
    })
    useEffect(() => {
        if (action === 'update') {
            axios.get(`http://localhost:8000/api/customers/${id}`)
                .then((res) => {
                    console.log(res.data)
                    setInputs({
                        firstName: res.data.customer.firstName,
                        lastName: res.data.customer.lastName,
                        phoneNumber: res.data.customer.phoneNumber,
                        street: res.data.customer.currentAddress.street,
                        unitNum: res.data.customer.currentAddress.unitNum,
                        city: res.data.customer.currentAddress.city,
                        state: res.data.customer.currentAddress.state,
                        zipCode: res.data.customer.currentAddress.zipCode,
                        country: res.data.customer.currentAddress.country,
                        status: res.data.customer.status,
                        financialStatus: res.data.customerFinancialCheck.status,
                        infoVerifiedBy: res.data.infoVerifiedBy,
                        notes: res.data.customer.notes,
                        financialNotes: res.data.customerFinancialCheck.notes,
                    })
                })
                .catch((err) => console.log(err));
        }
    }, [id]);

    const useStyles = makeStyles((theme) => ({


        TextField: {
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

    console.log("these are the inputs", inputs)
    const addCustomer = (event) => {
        event.preventDefault();
        const newCustomer = {
            customer: {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                phoneNumber: inputs.phoneNumber,
                currentAddress: {
                    street: inputs.street,
                    unitNum: inputs.unitNum,
                    city: inputs.city,
                    state: inputs.state,
                    zipCode: inputs.zipCode,
                    country: inputs.country,
                },
                status: inputs.status,
                notes: inputs.notes,
            },
            previousAddress: {
                street: inputs.street,
                unitNum: inputs.unitNum,
                city: inputs.city,
                state: inputs.state,
                zipCode: inputs.zipCode,
                country: inputs.country,
            },
            infoVerifiedBy: inputs.infoVerifiedBy,
            customerFinancialCheck: {
                status: inputs.financialStatus,
                notes: inputs.financialNotes,
            },
        };
        if (action === 'create') {
            axios.post('http://localhost:8000/api/customers', newCustomer)
                .then((res) => navigate('/admin/customers'))
                .catch((err) => console.log(err));
        }
        else if (action === 'update') {
            axios.put(`http://localhost:8000/api/customers/${id}`, newCustomer)
                .then((res) => navigate('/admin/customers'))
                .catch((err) => console.log(err));
        }
    }

    return (
        <>
            <Container fixed>
                <FormControl className="addCustomer">
                    <h4>Add a new renter:</h4>
                    <Grid container spacing={2} justify="space-around" direction="row" alignItems="flex-start">
                        <Grid container item justify="space-around">

                            <div className="addCustomerInput">
                                <TextField variant="outlined" label="First Name" InputLabelProps={{ shrink: true, }} type="text" name="firstName" id="firstName" value={inputs.firstName} onChange={(event) => setInputs({ ...inputs, firstName: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" label="Last Name:" InputLabelProps={{ shrink: true, }} type="text" name="lastName" id="lastName" value={inputs.lastName} onChange={(event) => setInputs({ ...inputs, lastName: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" InputLabelProps={{ shrink: true, }} label="Phone Number:" type="number" name="phone" id="phone" value={inputs.phoneNumber} onChange={(event) => setInputs({ ...inputs, phoneNumber: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" label="Street:" InputLabelProps={{ shrink: true, }} type="text" name="street" id="street" value={inputs.street} onChange={(event) => setInputs({ ...inputs, street: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" label="Unit Number:" InputLabelProps={{ shrink: true, }} type="text" name="unitNum" id="unitNum" value={inputs.unitNum} onChange={(event) => setInputs({ ...inputs, unitNum: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" label="City:" InputLabelProps={{ shrink: true, }} type="text" name="city" id="city" value={inputs.city} onChange={(event) => setInputs({ ...inputs, city: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <Select native name="state" variant="outlined" id="state" value={inputs.state} onChange={(event) => setInputs({ ...inputs, state: event.target.value })}>
                                    <option value="">Select State/Province </option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                    <option disabled={true}>CANADA</option>
                                    <option value="AB">Alberta</option>
                                    <option value="BC">British Columbia</option>
                                    <option value="MB">Manitoba</option>
                                    <option value="NB">New Brunswick</option>
                                    <option value="NL">Newfoundland and Labrador</option>
                                    <option value="NS">Nova Scotia</option>
                                    <option value="ON">Ontario</option>
                                    <option value="PE">Prince Edward Island</option>
                                    <option value="QC">Quebec</option>
                                    <option value="SK">Saskatchewan</option>
                                    <option value="NT">Northwest Territories</option>
                                    <option value="NU">Nunavut</option>
                                    <option value="YT">Yukon</option>
                                </Select>
                            </div>
                            <div className="addCustomerInput">
                                <TextField label="Zipcode:" InputLabelProps={{ shrink: true, }} variant="outlined" type="number" name="zipCode" id="zipCode" value={inputs.zipCode} onChange={(event) => setInputs({ ...inputs, zipCode: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <Select native name="country" variant="outlined" id="country" value={inputs.country} onChange={(event) => setInputs({ ...inputs, country: event.target.value })}>
                                    <option value="">Country</option>
                                    <option value="USA">United States of America</option>
                                    <option value="Canada">Canada</option>
                                </Select>
                            </div>
                            <div className="addCustomerInput">
                                <Select native variant="outlined" name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                                    <option value="">Renter's Status: </option>
                                    <option value="pending">Pending</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </Select>
                            </div>
                            <div className="addCustomerInput">
                                <Select native variant="outlined" name="financialStatus" id="financialStatus" value={inputs.financialStatus} onChange={(event) => setInputs({ ...inputs, financialStatus: event.target.value })}>
                                    <option value="">Financial Check:</option>
                                    <option value="pending">Pending</option>
                                    <option value="pass">Pass</option>
                                    <option value="fail">Fail</option>
                                </Select>
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" type="text" name="infoVerifiedBy" label="Info Verified By:" InputLabelProps={{ shrink: true, }} id="infoVerifiedBy" value={inputs.infoVerifiedBy} onChange={(event) => setInputs({ ...inputs, infoVerifiedBy: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" type="text" label="Additional Notes:" InputLabelProps={{ shrink: true, }} name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                            </div>
                            <div className="addCustomerInput">
                                <TextField variant="outlined" type="text" name="financialNotes" id="financialNotes" label="Financial Check Notes:" InputLabelProps={{ shrink: true, }} value={inputs.financialNotes} onChange={(event) => setInputs({ ...inputs, financialNotes: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid>
                            <Button variant="contained" color="secondary" onClick={(event) => navigate('/')}>Cancel</Button>
                            <Button variant="contained" color="primary" onClick={addCustomer}>Add Customer!</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </Container>
        </>
    );
};

export default AddCustomer;