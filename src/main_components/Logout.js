import axios from 'axios'
import React, {useState} from 'react'

const Logout = () => {
    const sid = localStorage.getItem('sid')
    const token = localStorage.getItem('token')


    const [login, setLogin] = useState(true)


    const logOut = () => {
    
        axios.post('http://localhost:5500/userSystems/logout', {sid: localStorage.getItem('sid')}, {
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => {
            setLogin(false)
            console.log(res.data.msg)
            localStorage.removeItem('sid')
            localStorage.removeItem('token')
        })
    }

    if (sid != null && token != null) {
    
        logOut()
    
        return (
            <div>
                { login ? <div id="loader">Logging Out</div>: <p>Log Out Sucess!</p>}
                
            </div>
        )
    } else {
        return(
            <p>You Are logged out already bro!</p>
        )
    }
  
}

export default Logout
