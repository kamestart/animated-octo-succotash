import React from 'react'

export const UserElement = () => {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-around', width: 70 }}>
            <img src="/userIconDefault.png" style={{width: 20, height: 20}} alt="abc"></img>
            
            <div class="dropdown">
                <button class="dropbtn">
                    <img src="/dropdoen.png" style={{width: 15, height: 15}} id="abcd"alt="abc"></img>
                </button>
                <div class="dropdown-content">
                    <p>Your Channels</p><hr style={{display:'inline-block', width:100}} ></hr>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </li>
    )
}
