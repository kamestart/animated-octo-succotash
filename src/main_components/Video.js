import React, { useState } from 'react'
import '../watch_video.css'

export const Video = ({ myVideo }) => {

    const [Link, setLink] = useState("")
    const [abc, setAbc] = useState(true)

    if(abc) {
        setLink(process.env.REACT_APP_SERVER + "/")
        setAbc(false)
    }

    return (
        <div>
           
            <a href={Link + "watch_video/" + myVideo._id}>
                <img
                 src={Link + "videos/get_one_thumbnail/" + myVideo.thumbnailFileName}
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
