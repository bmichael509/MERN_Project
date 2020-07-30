import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Main = (props) => {
    const [property, setProperty] = useState(null);
    const [allProperties, setAllProperties] = useState(null);
    const [searchFor, setSearchFor] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/properties")
            .then((res) => {
                setAllProperties(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (allProperties === null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const propertySearch = () => {
        if (searchFor === "") {
            return setProperty(allProperties);
        }

        const filteredProperties = allProperties.filter((thisProperty) => {
            return thisProperty['propertyName'].toLowerCase()(searchFor.toLowerCase());
        });

        setProperty(filteredProperties)
    };

    if (property === null) {
        return (
            <div>
                <select onChange={(e) => {
                    setSearchFor(e.target.value);
                    return propertySearch()
                }}
                >
                    {allProperties.map((propertyToSearch, i) => {
                        return (
                            <option
                                key={i}
                                value={propertyToSearch}
                            >
                                {propertyToSearch.propertyName}
                            </option>
                        );
                    })}
                </select>
            </div>
        )
    }

    return (
        <div>
            <select onChange={(e) => {
                setSearchFor(e.target.value);
                return propertySearch()
            }}
            >
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
            <button onClick={navigate(`/dashboard/${property._id}`)}>Go to Property</button>
        </div>
    )
}

export default Main;