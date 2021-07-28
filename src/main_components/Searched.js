import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Video } from './Video'

export const Searched =  () => {

    const [searchResults, setSearchResults] = useState()
    const [hello, sethello] = useState(true)

    function geteData() {
        const abc = process.env.REACT_APP_SERVER
        axios.post(abc + 'videos/getVideoSearchResults', { searched: query }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setSearchResults(res.data.videos)
        })
    }

    const {query} = useParams()

    if(hello){
        geteData()
        setTimeout(() => {
            console.log(searchResults)
        }, 200)
        
        sethello(false)
    }        

        
    

    return (
        <div>
        { searchResults !== undefined && searchResults.length !== 0  ? (
            <div>
            <br />
            <br />
            <br />

            {searchResults.map((myVideeo) => (
               <Video myVideo={myVideeo}/>
            ))}
            <br />
            <br />
            </div>
        
        ) : ((searchResults === undefined) ? (


            <div>
            Loding Results...
        </div>   
        ) : (
            <div>
            no results found...
        </div>
             
        ))}
        </div>
        
    )
}
