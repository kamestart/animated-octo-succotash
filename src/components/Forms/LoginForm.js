/* eslint-disable no-lone-blocks */
import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {

    const [loginStatus, setLoginStatus] = useState(false);
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("initialState");


    const handleSubmit = (e) => {
        e.preventDefault();

        const name = Name
        const password = Password

        var payload = JSON.stringify({ name, password })

        axios.post('http://localhost:5500/userSystems/login', { payload }, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (!res.data.auth) {
                setLoginStatus(false)
            } else {
                setLoginStatus(true)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("sid", res.data.sidd)
            }
        })

    }

    
    const userAuthenticated = () => {

        axios.post('http://localhost:5500/userSystems/currentUserInfo', {sid: localStorage.getItem('sid')}, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-type': 'application/json'
            }
        }).then(res => {
            console.log(res.data.user)
        })
    }

    return (
        <div>
            <form action="login" method="POST" onSubmit={handleSubmit}>
                <input type="text" name="username" required={true} placeholder="Username" onChange={(e) => {setName(e.target.value) }} />
                <br />
                <br />
                <input type="password" name="password" required={true} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                <br />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
            <br />
            <br />
            <p> Don't Have An Account? Sign Up <a href="/register">Here</a>!</p>

            <h1>{loginStatus}</h1>
            { loginStatus && <button onClick={userAuthenticated}>Check If Authenticated</button> }
        </div>
    )
}

export default LoginForm
