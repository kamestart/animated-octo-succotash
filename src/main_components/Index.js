/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Video } from './Video';

const Index = () => {

    const abc = process.env.REACT_APP_SERVER

    const [username, setUsername] = useState("")
    const [videos, setvideos] = useState("")
    const getUserData = () => {
        axios.post(abc + 'userSystems/currentUserInfo', { sid: localStorage.getItem('sid') }, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-type': 'application/json'
            }
        }).then(res => {
            setUsername(res.data.user.username)
        })
    }

    const getVideoData = async () => {
        await axios.get(abc + 'videos/videos_getAll').then(res => {
            setvideos(res.data)
        })
    }

    useEffect(() => {
        // if(sid != null && token != null) { 
        //     getUserData()  
        // }
        getVideoData()
    }, [getUserData, getVideoData])

    const sid = localStorage.getItem('sid')
    const token = localStorage.getItem('token')

    if (sid != null && token != null) {


        return (
            <div>
                <h1>Hello {username}</h1>

            </div>
        )
    } else {
        return (
            <div>
                {console.log(process.env.REACT_APP_KEY)}
                Hi!
                {videos !== undefined && videos.length !== 0 ? (
                    <div>
                        <br />
                        <br />
                        <br />

                        {videos.videos.map((myVideeo) => (
                            <Video myVideo={myVideeo} />
                        ))}
                        <br />
                        <br />
                    </div>

                ) : ((videos === "") ? (


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


}

export default Index
