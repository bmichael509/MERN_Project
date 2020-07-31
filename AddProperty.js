import React, { useState } from "react";
import {navigate, Link} from "@reach/router";
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

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  function  ContainedButtons() {
    const classes = useStyles();
  }



const styles = {
    paper: {
        width: "60%", padding: "1rem",
        textAlign: "center"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%",
        backgroundColor: "blue"
    },
    form: {
        width: "100%"
    }  
   


}  


const AddProperty = (props) => {
    const [inputs, setInputs] = useState({
        
        address : {
            propertyName : "",
            street: "",
            unitNum: "",
            city: "",
            state: "",
            zip: "",
            country: "" 
        },
        employee: "",
        notes: "",
    })




    const addProperty = (event) => {
        event.preventDefault();
        const newProperty = {
                propertyName: inputs.propertyName,
                Address: {
                    street: inputs.street,
                    unitNum: inputs.unitNum,
                    city: inputs.city,
                    state: inputs.state,
                    zipCode: inputs.zipCode,
                    country: inputs.country,
                },
                notes: inputs.notes,
            
           
        };
        axios.post('http://localhost:8000/api/properties', newProperty)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Container fixed>
            <FormControl onSubmit={addProperty} className="addProperty">
                <h4>Add a Property</h4>
                <Grid container spacing={2} justify="space-around" direction="row" alignItems="flex-start">
                <Grid container item  justify="space-around">
                
                <div className="addPropertyInput">
                    <TextField variant="outlined" label="Property Name" InputLabelProps={{shrink: true,}} type="text" name="propertyName" id="propertyName" value={inputs.propertyName} onChange={(event) => setInputs({ ...inputs, propertyName: event.target.value })} />
                </div>
            
                <div className="addPropertyInput">
                    <TextField variant="outlined" label="Street:" InputLabelProps={{shrink: true,}} type="text" name="street" id="street" value={inputs.street} onChange={(event) => setInputs({ ...inputs, street: event.target.value })} />
                </div>
                <div className="addPropertyInput">
                    <TextField variant="outlined" label="Unit Number:" InputLabelProps={{shrink: true,}} type="text" name="unitNum" id="unitNum" value={inputs.unitNum} onChange={(event) => setInputs({ ...inputs, unitNum: event.target.value })} />
                </div>
                <div className="addPropertyInput">
                    <TextField variant="outlined" label="City:"  InputLabelProps={{shrink: true,}} type="text" name="city" id="city" value={inputs.city} onChange={(event) => setInputs({ ...inputs, city: event.target.value })} />
                </div>
                <div className="addPropertyInput">
                    <Select native name="state" variant="outlined" id="state" value={inputs.state} onChange={(event) => setInputs({ ...inputs, state: event.target.value })}>
                        <option value="">State/Province</option>
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
                <div className="addPropertyInput">
                    <TextField label="Zipcode:"  InputLabelProps={{shrink: true,}} variant="outlined" type="number" name="zipCode" id="zipCode" value={inputs.zipCode} onChange={(event) => setInputs({ ...inputs, zipCode: event.target.value })} />
                </div>
                <div className="addPropertyInput">
                    <Select native  variant="outlined" name="country" id="country" value={inputs.country} onChange={(event) => setInputs({ ...inputs, country: event.target.value })}>
                        <option value="">Country</option>
                        <option value="USA">United States of America</option>
                        <option value="Canada">Canada</option>
                    </Select>
                </div>
                <div className="addPropertyInput">
                    <TextField variant="outlined" type="text" label="Employee:" InputLabelProps={{shrink: true,}} type="text" name="employee" id="employee" value={inputs.employee} onChange={(event) => setInputs({ ...inputs, employee: event.target.value })} />
                </div>
                <div className="addPropertyInput">
                    <TextField variant="outlined" type="text" label="Additional Notes:" InputLabelProps={{shrink: true,}} name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                </div>
                </Grid>
            <Grid>
                <Button variant="contained" color="secondary" href="#contained-buttons" onClick={(event) => navigate('/')}>Cancel</Button>
                <Button variant="contained" color="primary" href="#contained-buttons">Add Property!</Button>
            </Grid>
            </Grid>
            </FormControl>
            </Container>
        </>
    );
}; 

export default AddProperty;