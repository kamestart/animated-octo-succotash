import React from 'react'
import LoginRegister from '../Forms/LoginRegister'
import { UserElement } from '../Forms/UserElement'
import NLI from './NLI'
import SearchBar from './SearchBar'

export const NavbarLists = ({isLoggedIn}) => {
    return (
        
           <ul id="navbar-list">
                    <NLI link="/" name="Home"/>   
                    <SearchBar />
                    <NLI link="/videos" name="Videos"/>
                    <NLI link="/about" name="About"/>
                    { isLoggedIn ? (
                        <NLI link="/logout" name="Logout"/>
                        
                    ) : (
                        <LoginRegister />
                    ) }

                    { isLoggedIn ? (
                       <UserElement />
                    ) : (
                        <p></p>
                    ) }
                    
                </ul>
    )
}
