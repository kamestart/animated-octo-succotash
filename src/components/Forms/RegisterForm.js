/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import 'axios';
import axios from 'axios';

const RegisterForm = (props) => {

    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Captcha, setCaptcha] = useState("")

 
    const handleSubmit = async (e) => {

    const currentHostName = window.location.host
    const currentProtocol = location.protocol

    alert(currentHostName)
    alert(currentProtocol)


        e.preventDefault();
        if (Name === "" ||
        Password === "" ||
        Captcha === "" ||
        Captcha === null) {
           
            alert('One of the fields is missing! please fill it out before you submit the form')

        }

        var username = Name
        var password = Password
        var captcha = Captcha

        var bodymine = JSON.stringify({ username, password , captcha  })

        const abc = process.env.REACT_APP_SERVER

       await axios.post(abc + 'userSystems/register', { bodymine }, {
                headers: { 
                    'Content-type': 'application/json',
                    // 'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-type, Accept,  X-Custom-Header',
                    // 'Access-Control-Request-Method': 'POST'
                }
            }).then((res) => {
                console.log(res.data)
                alert(res.data.msg)
                console.log(currentProtocol + "//" + currentHostName  + res.data.RedirectUrl)
                window.location = currentProtocol + "//" + currentHostName + res.data.RedirectUrl
            })      
            
    }

    const onChangeCaptcha = (value) => {
        setCaptcha(value)
    }


    return (
        <div className="register_form">
            <form action="/register" id="registerForm"  onSubmit={handleSubmit}>
                <input type="text" name="username" required={true} placeholder="Username" id="username" className="text_field" minLength="3" onChange={(e) => setName(e.target.value)}/>
                <br />
                <br />
                <input type="password" name="password" required={true} placeholder="Password" id="password" className="text_field" minLength="8" onChange={(e) => { setPassword(e.target.value) }}/>
                <br />
                <br />
                <ReCAPTCHA sitekey={props.sitekey} onChange={onChangeCaptcha} render="explicit" id="captcha"/>
                <br />
                    <br />
                    <br />
                    <button type="submit" id="submit-btn">Sign Up</button>
                </form>
                <br />
                <br />
                <p>Already Have An Account? Login<a href="/login"> Here</a>!</p>
            </div>
        )
};

export default RegisterForm

