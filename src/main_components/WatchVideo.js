import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../watch_video.css'

export const WatchVideo = () => {
    
    const {videoId} = useParams()
    console.log(videoId)
    const abc = process.env.REACT_APP_SERVER

    return (
        <div id="fef">
            <video autoPlay id="video_play" style={{ width: 600 }} src={abc + "videos/get_one/"+videoId} controls></video>
        </div>
    )
}
