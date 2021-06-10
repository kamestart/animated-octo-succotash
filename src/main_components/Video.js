import React, { useState } from 'react'
import '../watch_video.css'

export const Video = (myVideo) => {

    const [Link, setLink] = useState("")
    const [abc, setAbc] = useState(true)

    if(abc) {
        setLink(window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/")
        setAbc(false)
    }

    return (
        <div>
           
            <a href={Link + "watch_video/" + myVideo.myVideo._id}>
                <img
                 src={Link + "videos/get_one_thumbnail/" + myVideo.myVideo.thumbnailFileName}
                 alt="thumbnail"
                 id="imageVideo"
                >
                </img>
                <br />
                <div>
                <h5><b>{ myVideo.myVideo.originalName} </b></h5>
                </div>
                </a>
            <br/>
            <br/>
        </div>
    )
}
