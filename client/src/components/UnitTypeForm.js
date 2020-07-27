import React, { useState } from "react";
import axios from "axios";

const UnitTypeForm = (props) => {
    const [inputs, setInputs] = useState({
        bathrooms: "",
        bedrooms: "",
        squareFootage: "",
        rentalAmount: "",
        notes: ""
    });

    return (
        <>
            <form>
                <h4>Add a unit type:</h4>
            </form>
        </>
    )
}