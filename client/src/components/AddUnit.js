import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Loading from "./Loading";
import {
    Grid,
    FormControl,
    Container,
    Select,
    Button,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddUnit = (props) => {
    const { action, id } = props;
    const [inputs, setInputs] = useState({
        name: "",
        status: "",
        unitTypeID: "",
        propertyID: "",
        notes: "",
    });
    const [unitTypes, setUnitTypes] = useState(null);
    const [properties, setProperties] = useState(null);

    const useStyles = makeStyles((theme) => ({
        TextField: {
            padding: theme.spacing(5),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(5),
        },

    }));

    function ContainedButtons() {
        const classes = useStyles();
    }

    const styles = {
        button: {
            width: "100%",
            backgroundColor: "blue",
            margin: "10px"
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/unitTypes')
            .then((res) => setUnitTypes(res.data))
            .catch((err) => console.log(err));

        axios.get('http://localhost:8000/api/properties')
            .then((res) => setProperties(res.data))
            .catch((err) => console.log(err));

        if (action === 'update') {
            axios.get(`http://localhost:8000/api/units/${props.id}`)
                .then((res) => {
                    setInputs({
                        name: res.data.name,
                        status: res.data.status,
                        unitTypeID: res.data.unitType._id,
                        propertyID: res.data.property,
                        notes: res.data.notes
                    });
                })
                .catch((err) => console.log(err));
        };
    }, []);

    if (unitTypes === null || properties === null) {
        return (
            <Loading />
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (action === 'create') {
            const newUnit = {
                name: inputs.name,
                status: inputs.status,
                unitType: { _id: inputs.unitTypeID },
                property: { _id: inputs.propertyID },
                notes: inputs.notes,
            };
            // let property = properties.filter((property) => property._id === inputs.propertyID);
            let property = null;
            let units = null;
            axios.get('http://localhost:8000/api/properties/' + inputs.propertyID)
                .then((res) => {
                    property = res.data;
                    units = res.data.unit;
                    axios.post('http://localhost:8000/api/units', newUnit)
                        .then((res) => {
                            units.push(res.data._id);
                            let newUnits = { unit: units.map((unit) => { return ({ _id: unit }) }) }
                            axios.put('http://localhost:8000/api/properties/' + property._id, newUnits)
                                .then(res => navigate('/admin/units'))
                                .catch((err) => console.log(err.response));
                        })
                        .catch((err) => console.log(err.response));
                })
                .catch((err) => console.log(err.response));
        }
        else if (action === 'update') {
            const newUnit = {
                name: inputs.name,
                status: inputs.status,
                unitType: { _id: inputs.unitTypeID },
                property: { _id: inputs.propertyID },
                notes: inputs.notes,
            };
            axios.put(`http://localhost:8000/api/units/${id}`, newUnit)
                .then((res) => {
                    console.log(res.data, 'has been updated to the database');
                    navigate('/main');
                })
                .catch((err) => console.log(err));
        };
    }

    return (
        <>
            <Container fixed>
                <FormControl onSubmit={handleSubmit} className='addUnit'>
                    <h4>Add a New Unit:</h4>
                    <Grid container spacing={2} justify="space-around" direction="row" alignItems="centered">
                        <Grid container item justify="space-around">
                            <div className='addPropertyInput'>
                                <TextField variant="outlined" label="Unit Name/Number:" InputLabelProps={{ shrink: true, }} type="text" name="name" id="name" value={inputs.name} onChange={(event) => setInputs({ ...inputs, name: event.target.value })} />
                            </div>
                            <div className='addPropertyInput'>
                                <Select native variant="outlined" name="status" id="status" value={inputs.status} onChange={(event) => setInputs({ ...inputs, status: event.target.value })}>
                                    <option value="">Select a unit status:</option>
                                    <option value="available">Available</option>
                                    <option value="rented">Rented</option>
                                    <option value="inactive">Inactive</option>
                                </Select>
                            </div>
                            <div className='addPropertyInput'>
                                <Select native variant="outlined" name="unitType" id="unitType" value={inputs.unitTypeID} onChange={(event) => setInputs({ ...inputs, unitTypeID: event.target.value })}>
                                    <option value="">Select a Unit Type</option>
                                    {unitTypes.map((unitType) => {
                                        return (
                                            <option key={unitType._id} value={unitType._id}>{unitType.name}</option>
                                        );
                                    })}
                                </Select >
                            </div>
                            <div className='addPropertyInput'>
                                <Select native variant="outlined" name="property" id="property" value={inputs.propertyID} onChange={(event) => setInputs({ ...inputs, propertyID: event.target.value })}>
                                    <option value="" disabled={true}>Select Property</option>
                                    {properties.map((property) => {
                                        return (
                                            <option key={property._id} value={property._id}>{property.propertyName}</option>
                                        );
                                    })}
                                </Select>
                            </div>
                            <div className='addPropertyInput'>
                                <TextField variant="outlined" label="Notes:" InputLabelProps={{ shrink: true, }} type="text" name="notes" id="notes" value={inputs.notes} onChange={(event) => setInputs({ ...inputs, notes: event.target.value })} />
                            </div>
                        </Grid>
                        <Grid>

                            <Button variant="contained" color="secondary" onClick={(event) => navigate('/admin/units')}>Cancel</Button>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>
                </FormControl>

            </Container>
        </>
    )
};
export default AddUnit;