import axios from 'axios';
import React, { Fragment, useState } from 'react';

const UploadVideoForm3 = () => {

    const [title, setTitle] = useState("")
    const [desciprtion, setDesciprtion] = useState("")
    const [username, setUsername] = useState("")

    const getUserData = () => {

        const abc = process.env.REACT_APP_SERVER
        axios.post(abc + 'userSystems/currentUserInfo', {sid: localStorage.getItem('sid')}, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            setUsername(res.data.user.username)
        })
    }


    const submitForm = async (e) => {
        console.log('efrfe')
        await getUserData()
        e.preventDefault()

        const abc = process.env.REACT_APP_SERVER
        try {
            const thmbFileName = localStorage.getItem('thumbnailFileName')
            const videoFileName = localStorage.getItem('videoFileName')
            await axios.post(abc + 'videos/create_video_pt_3', { thumbnailFileName: thmbFileName, videoFileName: videoFileName, title: title, description: desciprtion, sid: localStorage.getItem('sid')}, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Content-type': 'application/json'
                }
            })
            .then(res => {
                if(res.data.success) {
                    alert('video uploaded!')
                } else {
                    alert('subject 34-c expirement test results negative..... pleeeeeaaaase bring in subject 35-c (from ant-man)')
                }
            })
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div id="uploadVideo3">
            <Fragment>
            <br />
            <br />
            <br />
            <form method="POST" onSubmit={submitForm}>
                <input type="text" placeholder='Title' required onChange={(e) => {
                    setTitle(e.target.value)
                }}></input>
                <br />
                <br />
                <br />
                <textarea placeholder="Description" required onChange={(e) => {
                    setDesciprtion(e.target.value)
                }}></textarea>
                <br />
                <br />
                <br />
                <button type="submit">Upload The Video</button>
            </form>
            
            
            </Fragment>
        </div>
    )
}

export default UploadVideoForm3
