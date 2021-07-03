import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../watch_video.css'
import { VideoInfo } from './VideoInfo'

export const WatchVideo = () => {
    
    const {videoId} = useParams()
    const [videoData, setVideoData] = useState()

    console.log(videoId)
    const abc = process.env.REACT_APP_SERVER

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "/js/addToLS.js";
        script.defer = true;
        const abc = process.env.REACT_APP_SERVER

        async function fetchData(){
            await axios.post(abc + 'videos/getVideoInfo', { objId: videoId }, {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => {
                setVideoData(res.data)
            })    
        } 

        fetchData()

        console.log(videoData)
      
        document.body.appendChild(script);
      }, []);
      

    return (
        <div>
            <div id="fef">
                <video id="video_play" src={abc + "videos/get_one/"+videoId} autoPlay={true} controls></video>
            </div>
        
            {videoData && <VideoInfo videoInfo={videoData}/>}
            
        </div>
    )
}
