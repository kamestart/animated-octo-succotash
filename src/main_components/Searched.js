import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Video } from './Video'

export const Searched =  () => {

    const [searchResults, setSearchResults] = useState()
    const [ShouldIFetchVideoResults, setShouldIFetchVideoResults] = useState(true)
    const [shouldIRender, setShouldIRender] = useState(false)

    const {query} = useParams()

    if(ShouldIFetchVideoResults) {
        axios.post('http://localhost:5500/videos/getVideoSearchResults', { searched: query }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setSearchResults(res.data.videos)
            setShouldIRender(true)
            setShouldIFetchVideoResults(false)
        })
       
    }

    if(shouldIRender) {
        return (
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
        )
    } else {
        return (
            <h1>vfewr</h1>
        )
    }
}
