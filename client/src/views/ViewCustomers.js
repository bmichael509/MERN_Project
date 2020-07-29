import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ViewCustomers = (props) => {
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/customers')
            .then((res) => {
                setCustomers(res.data.sort((a, b) => {
                    if (a.customer.person.lastName.toLowerCase() < b.customer.person.lastName.toLowerCase()) { return -1 };
                    return (a.customer.person.lastName.toLowerCase() > b.customer.person.lastName.toLowerCase() ? 1 : 0);
                }
                ))
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Link className="new" to="/customers/new">New</Link>
            <table>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Phone No.</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => {
                        return (
                            <tr key={customer._id}>
                                <td><Link to={`/customers/details/${customer._id}`}>{customer.customer.person.lastName}</Link></td>
                                <td>{customer.customer.person.firstName}</td>
                                <td>{customer.customer.person.phoneNumber}</td>
                                <td>{customer.customer.person.address.street}, {customer.customer.person.address.city}, {customer.customer.person.address.state} {customer.customer.person.address.zipCode} {customer.customer.person.address.country}</td>
                                <td>{customer.customer.person.status}</td>
                                <td>{customer.customer.person.notes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ViewCustomers;