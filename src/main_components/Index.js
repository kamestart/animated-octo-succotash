import React, { useState } from 'react';
import axios from 'axios';

const Index = () => {

    const abc = process.env.REACT_APP_SERVER

    const [username, setUsername] = useState("")

    const getUserData = () => {
        axios.post(abc +'userSystems/currentUserInfo', {sid: localStorage.getItem('sid')}, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-type': 'application/json'
            }
        }).then(res => {
            setUsername(res.data.user.username)
        })
    }

    const sid = localStorage.getItem('sid')
    const token = localStorage.getItem('token')

    if(sid != null && token != null) {
        getUserData()

        return (
            <div>
                <h1>Hello {username}</h1>
            </div>
        )
    } else {
        return(
            <div>
                {console.log(process.env.REACT_APP_KEY)}
                Hi!
            </div>
        )
    }

  
}

export default Index
