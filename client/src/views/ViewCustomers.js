import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Loading from "../components/Loading";
import AdminBar from "../components/AdminBar";

const ViewCustomers = (props) => {
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/customers')
            .then((res) => {
                setCustomers(res.data.sort((a, b) => {
                    if (a.customer.lastName.toLowerCase() < b.customer.lastName.toLowerCase()) { return -1 };
                    return (a.customer.lastName.toLowerCase() > b.customer.lastName.toLowerCase() ? 1 : 0);
                }
                ))
            })
            .catch((err) => console.log(err))
    }, [])

    if (customers === null) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <AdminBar />
            <h2>Customers</h2>
            <Link className="new" to="/admin/customers/new">New</Link>
            <table className='dashboardUnits'>
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
                                <td><Link to={`/customers/details/${customer._id}`}>{customer.customer.lastName}</Link></td>
                                <td>{customer.customer.firstName}</td>
                                <td>{customer.customer.phoneNumber}</td>
                                <td>{customer.customer.address.street}, {customer.customer.address.city}, {customer.customer.address.state} {customer.customer.address.zipCode} {customer.customer.address.country}</td>
                                <td>{customer.customer.status}</td>
                                <td>{customer.customer.notes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ViewCustomers;