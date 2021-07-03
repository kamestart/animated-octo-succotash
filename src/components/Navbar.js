import NLI from './ChildrenComponents/NLI'
import React, {useState} from 'react';
import LoginRegister from './Forms/LoginRegister';
import SearchBar from './ChildrenComponents/SearchBar';
import { UserElement } from './Forms/UserElement';
// import SearchBar from './ChildrenComponents/SearchBar'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('sid') && localStorage.getItem('token') ? true : false)


    return (
        <div>
            <nav>
                <div id="header">
                    <h4>Calnoc</h4>
                </div>
                <ul id="navbar-list">
                    <NLI link="/" name="Home"/>
                    <SearchBar />
                    { isLoggedIn ? (
                        <NLI link="/logout" name="Logout"/>
                    ) : (
                        <LoginRegister />
                    ) }
                    <NLI link="/videos" name="Videos"/>
                    <NLI link="/about" name="About"/>

                    { isLoggedIn ? (
                       <UserElement />
                    ) : (
                        <p></p>
                    ) }
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
