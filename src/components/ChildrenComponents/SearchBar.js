import React, {useState} from 'react';
import 'axios';
import axios from 'axios';

const SearchBar = () => {

    const [Search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const abc = Search
        var searchUrl = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + '/search/' + abc 
        window.location = searchUrl
    }       

    return (
        <div className="navbar" id='searchbar' onSubmit={handleSubmit}>
                <form method="GET" action="/">
                    <div id="searchBox">
                        <input type="text" name="searched" id="searchInput" placeholder="Search" required onChange={(e) => setSearch(e.target.value)}/>
                        <button type="submit" id="search-btn"><img src="/search.png" id="searchIcon" alt=""></img></button>
                    </div>
            </form>

        </div>
    )
}

export default SearchBar
