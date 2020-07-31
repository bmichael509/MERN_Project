import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from '@reach/router'
import {
    Grid,
    FormControl,
    Container,
    Select,
    Button,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const AddEmployee = (props) => {
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
        role: "",
        notes: "",
    })

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
    const addEmployee = (event) => {
        event.preventDefault();
        const newEmployee = {
            employee: {
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
                role: inputs.role,
                notes: inputs.notes,
            }
        };
        axios.post('http://localhost:8000/api/employees', newEmployee)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <Container fixed>
        <FormControl onSubmit={addEmployee} className="addEmployee">
            <h4>Add a new Employee:</h4>
            <Grid container spacing={2} justify="space-around" direction="row" alignItems="flex-start">
            <Grid container item  justify="space-around">

            <div className="addEmployeeInput">
                <TextField variant="outlined" label="First Name:" InputLabelProps={{shrink: true,}} type="text" name="firstName" id="firstName" value={inputs.firstName} onChange={(event) => setInputs({ ...inputs, firstName: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <TextField variant="outlined" label="Last Name:" InputLabelProps={{shrink: true,}} type="text" name="lastName" id="lastName" value={inputs.lastName} onChange={(event) => setInputs({ ...inputs, lastName: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <TextField variant="outlined" label="Phone Number:" InputLabelProps={{shrink: true,}} type="number" name="phone" id="phone" value={inputs.phoneNumber} onChange={(event) => setInputs({ ...inputs, phoneNumber: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <TextField variant="outlined" label="Street:" InputLabelProps={{shrink: true,}} type="text" name="street" id="street" value={inputs.street} onChange={(event) => setInputs({ ...inputs, street: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <TextField variant="outlined" label="Unit Number:" InputLabelProps={{shrink: true,}} type="text" name="unitNum" id="unitNum" value={inputs.unitNum} onChange={(event) => setInputs({ ...inputs, unitNum: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <TextField label="City:" variant="outlined" InputLabelProps={{shrink: true,}} type="text" name="city" id="city" value={inputs.city} onChange={(event) => setInputs({ ...inputs, city: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <Select native variant="outlined" name="state" id="state" value={inputs.state} onChange={(event) => setInputs({ ...inputs, state: event.target.value })}>
                    <option value="">State/Province:</option>
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
                </Select >
            </div>
            <div className="addEmployeeInput">
                <TextField label="Zipcode:" variant="outlined" InputLabelProps={{shrink: true,}} type="number" name="zipCode" id="zipCode" value={inputs.zipCode} onChange={(event) => setInputs({ ...inputs, zipCode: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <Select native variant="outlined" label="Country" name="country" id="country" value={inputs.country} onChange={(event) => setInputs({ ...inputs, country: event.target.value })}>
                    <option value="">Country</option>
                    <option value="USA">United States of America</option>
                    <option value="Canada">Canada</option>
                </Select >
            </div>
            <div className="addEmployeeInput">
                <Select native variant="outlined" name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                    <option value="">Employee's Status </option>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </Select >
            </div>
            <div className="addEmployeeInput">
                <TextField variant="outlined" label="Info Verified By:" InputLabelProps={{shrink: true,}} type="text" name="infoVerifiedBy" id="infoVerifiedBy" value={inputs.infoVerifiedBy} onChange={(event) => setInputs({ ...inputs, infoVerifiedBy: event.target.value })} />
            </div>
            <div className="addEmployeeInput">
                <TextField variant="outlined" label="Additional Notes:" InputLabelProps={{shrink: true,}} type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
            </div>
            </Grid>
            <Grid>
            <Button variant="contained" color="primary" href="#contained-buttons">Add Employee!</Button>
            {" "}
            <Button variant="contained" color="secondary" href="#contained-buttons"
                onClick={(event) => { navigate("/properties") }}>
                Cancel
            </Button>
            </Grid>
            </Grid>
        </FormControl>
        </Container>
    );
};

export default AddEmployee;