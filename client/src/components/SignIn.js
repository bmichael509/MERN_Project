import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const SignIn = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = event => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/login",
                { email, password },
                {
                    withCredentials: true
                }
            )
            .then(res => {
                console.log(res);
                navigate("/users");
            })
            .catch(err => {
                console.log(err);
                setErrorMessage(err.response.data.msg);
            });
    };

    return (
        <fieldset>
            <legend>Sign In</legend>
            <form onSubmit={login}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Email:</InputLabel>
                    <OutlinedInput
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password:</InputLabel>
                    <OutlinedInput
                        type="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Sign In</Button>
                <p className="error-message">{errorMessage ? errorMessage : ""}</p>
            </form>
        </fieldset>
    );
};

export default SignIn