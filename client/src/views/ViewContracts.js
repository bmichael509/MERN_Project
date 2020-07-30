import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Loading from "../components/Loading";

const ViewContracts = (props) => {
    const [contracts, setContracts] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/contracts')
            .then((res) => {
                setContracts(res.data)
            })
            .catch((err) => console.log(err));
    });

    if (contracts === null) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <Link to="/admin/contracts/new">New</Link>
            <table>
                <thead>
                    <tr>
                        <th>Move In Date</th>
                        <th>Move Out Date</th>
                        <th>Length (Months)</th>
                        <th>Rent Amount</th>
                        <th>Deposit Amount</th>
                        <th>Status</th>
                        <th>Unit Type</th>
                        <th>Unit</th>
                        <th>Customer</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map((contract) => {
                        return (
                            <tr key={contract._id}>
                                <td>{contract.moveInDate}</td>
                                <td>{contract.moveOutDate}</td>
                                <td>{contract.length}</td>
                                <td>{contract.monthlyAmount}</td>
                                <td>{contract.deposit.depositAmount}</td>
                                <td>{contract.status}</td>
                                <td>{contract.unitType.name}</td>
                                <td>{contract.unit.name}</td>
                                <td>{contract.customer.lastName}, {contract.customer.firstName}</td>
                                <td>{contract.notes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ViewContracts;