import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Loading from "../components/Loading";
import Dashboard from "../components/Dashboard";

const Main = (props) => {
    const [property, setProperty] = useState(null);
    const [allProperties, setAllProperties] = useState(null);
    const [units, setUnits] = useState(null);
    const [searchFor, setSearchFor] = useState("");

    const propertySearch = (event) => {
        // if (searchFor === "") {
        //     return setProperty(allProperties);
        // }

        const filteredProperties = allProperties.filter((thisProperty) => {
            return thisProperty['_id'] === event.target.value;
        });
        axios.get('http://localhost:8000/api/propertyUnits/' + filteredProperties[0]._id)
            .then((res) => {
                setProperty(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/properties")
            .then((res) => {
                setAllProperties(res.data);
                axios.get(`http://localhost:8000/api/propertyUnits/${res.data[0]._id}`)
                    .then((res) => {
                        setProperty(res.data);
                        setUnits(res.data.unit)
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (allProperties === null || property === null) {
        return (
            <div>
                <Loading />
            </div>
        )
    }


    // if (property === null) {
    //     return (
    //         <div>
    //             <select onChange={(e) => {
    //                 setSearchFor(e.target.value);
    //                 return propertySearch()
    //             }}
    //             >
    //                 {allProperties.map((propertyToSearch, i) => {
    //                     return (
    //                         <option
    //                             key={i}
    //                             value={propertyToSearch}
    //                         >
    //                             {propertyToSearch.propertyName}
    //                         </option>
    //                     );
    //                 })}
    //             </select>
    //         </div>
    //     )
    // }

    return (
        <div>
            <label htmlFor="property">Select Property: </label>
            <select id="property" onChange={propertySearch}>
                {allProperties.map((propertyToSearch, i) => {
                    return (
                        <option
                            key={i}
                            value={propertyToSearch._id}
                        >
                            {propertyToSearch.propertyName}
                        </option>
                    );
                })}
            </select>
            {/* <button onClick={navigate(`/dashboard/${property._id}`)}>Go to Property</button> */}

            <Dashboard property={property} units={units} />
        </div>
    )
}

export default Main;