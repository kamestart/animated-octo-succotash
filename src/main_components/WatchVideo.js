import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../watch_video.css'

export const WatchVideo = () => {
    
    const {videoId} = useParams()
    console.log(videoId)


    return (
        <div id="fef">
            <video autoPlay id="video_play" style={{ width: 600 }} src={"http://localhost:5500/videos/get_one/"+videoId} controls></video>
        </div>
    )
}
