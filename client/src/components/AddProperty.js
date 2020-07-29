import React, { useState } from "react";
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Select,
    Button
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
        console.log("addProperty:", inputs);
    }

    return (
        <>
            <Paper elevation={3} style={styles.paper}>
            <form onSubmit={addProperty} >
                <h4>Add A New Property:</h4>
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="propertyName">Property Name:</InputLabel>
                    <OutlinedInput type="text" name="propertyName" id="propertyName" value={inputs.propertyName} onChange={(event) => setInputs({ ...inputs, firstName: event.target.value })} />
                </FormControl>
                </div>
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="street">Street Address:</InputLabel>
                    <OutlinedInput type="text" name="street" id="street" value={inputs.street} onChange={(event) => setInputs({ ...inputs, street: event.target.value })} />
                </FormControl>
                </div>
            
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="city">City:</InputLabel>
                    <OutlinedInput type="text" name="city" id="city" value={inputs.city} onChange={(event) => setInputs({ ...inputs, city: event.target.value })} />
                </FormControl>
                </div>
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="state">State/Province:</InputLabel>
                    <Select native name="state" id="state" value={inputs.state} onChange={(event) => setInputs({ ...inputs, state: event.target.value })}>
                        <option value=""></option>
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
                    </FormControl>
                </div>
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="zip">Zipcode:</InputLabel>
                    <OutlinedInput type="number" name="zip" id="zip" value={inputs.zip} onChange={(event) => setInputs({ ...inputs, zip: event.target.value })} />
                </FormControl>
                </div>
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="country">Country:</InputLabel>
                    <Select native name="country" id="country" value={inputs.country} onChange={(event) => setInputs({ ...inputs, country: event.target.value })}>
                        <option value=""></option>
                        <option value="USA">United States of America</option>
                        <option value="Canada">Canada</option>
                    </Select>
                    </FormControl>
                </div>
        
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="employee">Employee:</InputLabel>
                    <OutlinedInput type="text" name="employee" id="employee" value={inputs.employee} onChange={(event) => setInputs({ ...inputs, employee: event.target.value })} />
                </FormControl>
                </div>
                <div >
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel htmlFor="notes">Additional Notes:</InputLabel>
                    <OutlinedInput type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                </FormControl>
                </div>
                <Button variant="contained" color="secondary" href="#contained-buttons">Cancel</Button>
                <Button variant="contained" color="primary" href="#contained-buttons">Submit</Button>
                

            </form>
            </Paper>
        </>
    );
};

export default AddProperty;