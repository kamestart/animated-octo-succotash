import NLI from './ChildrenComponents/NLI'
import React, {useState} from 'react';
import LoginRegister from './Forms/LoginRegister';
import SearchBar from './ChildrenComponents/SearchBar';
import { UserElement } from './Forms/UserElement';
import { NavbarLists } from './ChildrenComponents/NavbarLists';
import { Hamburger } from './ChildrenComponents/Hamburger';
// import SearchBar from './ChildrenComponents/SearchBar'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('sid') && localStorage.getItem('token') ? true : false)


    return (
        <div>
            
            <Hamburger />
            
            <nav>
                <div id="header"><a href="/"><h4>Calnoc</h4></a></div>    
                <NavbarLists isLoggedIn={isLoggedIn} />
                
            </nav>
            
            <hr style={{marginTop: "0.7%", backgroundColor: '#686c70'}}></hr>
            <br />           
        </div>
    )
}

export default Navbar
