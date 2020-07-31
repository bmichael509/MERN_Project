import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { navigate } from "@reach/router";

const CustomerDetails = (props) => {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/customers/${props._id}`)
            .then((res) => setCustomer(res.data))
            .catch((err) => console.log(err));
    }, [props._id]);

    if (customer === null) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <h1 style={{ margin: '10px 0' }}>Customer Name: {customer.customer.lastName}, {customer.customer.firstName}</h1>
            <button style={{ margin: '0 0 5px 0' }} onClick={(event) => navigate(`/admin/customers/details/${props._id}/edit`)}>Edit</button>
            <section>
                <table className="dashboardUnits">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Current Address</th>
                            <th>Status</th>
                            <th>Status of Financial Check</th>
                            <th>Financial Check Notes</th>
                            <th>Customer Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{customer.customer.lastName}, {customer.customer.firstName}</td>
                            <td>{customer.customer.phoneNumber}</td>
                            <td>
                                {customer.customer.currentAddress.street}
                                <br />
                                {customer.customer.currentAddress.city}
                                {customer.customer.currentAddress.state}
                                {customer.customer.currentAddress.zipCode}
                                {customer.customer.currentAddress.country}
                            </td>
                            <td>{customer.customer.status}</td>
                            <td>{customer.customerFinancialCheck.status}</td>
                            <td>{customer.customerFinancialCheck.notes}</td>
                            <td>{customer.customer.notes}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default CustomerDetails;