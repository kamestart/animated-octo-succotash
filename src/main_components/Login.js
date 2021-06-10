import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import Header from '../components/Header'
import PropTypes from 'prop-types';

const Login = (props) => {
    return (
        <div>
            <Header value="Welcome Back, Login Please."/>
            <br />
            <LoginForm setToken={props.setToken}/>
        </div>
       
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default Login
