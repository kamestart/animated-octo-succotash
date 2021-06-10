import React, { Fragment } from 'react'
import NLI from '../ChildrenComponents/NLI'

const LoginRegister = () => {
    return (
        <Fragment>
            <NLI link="/login" name="Login"/>
            <NLI link="/register" name="Register"/>
        </Fragment>
    )
}

export default LoginRegister
