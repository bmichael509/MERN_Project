import React, { useState } from "react";
import axios from "axios";

const AddCustomer = (props) => {
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
        axios.post('http://localhost:8000/api/customers', newCustomer)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <form onSubmit={addCustomer} className="addCustomer">
                <h4>Add a new renter:</h4>
                <div className="addCustomerInput">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={inputs.firstName} onChange={(event) => setInputs({ ...inputs, firstName: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" value={inputs.lastName} onChange={(event) => setInputs({ ...inputs, lastName: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="number" name="phone" id="phone" value={inputs.phoneNumber} onChange={(event) => setInputs({ ...inputs, phoneNumber: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="street">Street:</label>
                    <input type="text" name="street" id="street" value={inputs.street} onChange={(event) => setInputs({ ...inputs, street: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="unitNum">Unit Number:</label>
                    <input type="text" name="unitNum" id="unitNum" value={inputs.unitNum} onChange={(event) => setInputs({ ...inputs, unitNum: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" id="city" value={inputs.city} onChange={(event) => setInputs({ ...inputs, city: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="state">State/Province:</label>
                    <select name="state" id="state" value={inputs.state} onChange={(event) => setInputs({ ...inputs, state: event.target.value })}>
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
                    </select>
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="zipCode">Zipcode:</label>
                    <input type="number" name="zipCode" id="zipCode" value={inputs.zipCode} onChange={(event) => setInputs({ ...inputs, zipCode: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="country">Country:</label>
                    <select name="country" id="country" value={inputs.country} onChange={(event) => setInputs({ ...inputs, country: event.target.value })}>
                        <option value=""></option>
                        <option value="USA">United States of America</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="status">Renter's Status:</label>
                    <select name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                        <option value=""></option>
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="financialStatus">Renter's Status:</label>
                    <select name="financialStatus" id="financialStatus" value={inputs.financialStatus} onChange={(event) => setInputs({ ...inputs, financialStatus: event.target.value })}>
                        <option value=""></option>
                        <option value="pending">Pending</option>
                        <option value="pass">Pass</option>
                        <option value="fail">Fail</option>
                    </select>
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="infoVerifiedBy">Info Verified By:</label>
                    <input type="text" name="infoVerifiedBy" id="infoVerifiedBy" value={inputs.infoVerifiedBy} onChange={(event) => setInputs({ ...inputs, infoVerifiedBy: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="notes">Additional Notes:</label>
                    <input type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                </div>
                <div className="addCustomerInput">
                    <label htmlFor="financialNotes">Financial Check Notes:</label>
                    <input type="text" name="financialNotes" id="financialNotes" value={inputs.financialNotes} onChange={(event) => setInputs({ ...inputs, financialNotes: event.target.value })} />
                </div>
                <button>Add Customer!</button>
            </form>
        </>
    );
};

export default AddCustomer;