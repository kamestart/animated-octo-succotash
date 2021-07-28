import axios from 'axios';
import React, { Fragment, useState } from 'react';
import ProgressBar from '../ChildrenComponents/ProgressBar';

export const UploadVideoForm = () => {
    const [File, setFile] = useState();
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const fileOnChange = e => {
        console.log(e.target.files[0])
        setFile(e.target.files[0]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", File);   
        const abc = process.env.REACT_APP_SERVER

        try {
            await axios.post(abc + 'videos/create_video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-type, Accept,  X-Custom-Header',
                    // 'Access-Control-Request-Method': 'POST'
                },

                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100 )/ progressEvent.total)))
                }
                
            }).then(res => {
                setMessage('File Uploaded')
                console.log(res)
                localStorage.setItem('videoFileName', res.data.videoFileName)
                alert("Yeah, video uploaded")

                window.location = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/UploadVideo2"                
                
            })
            
        } catch (err) {
           console.error(err)
        }
    } 

    return (
        <Fragment >
            <br />
            <br />
            <br />
            <div id="upload-video">
             <form method="POST" onSubmit={onSubmit}>
                <br />
                <br />
                <h1>Upload A Video</h1>
                <br />
                <br />
                <input type="file" onChange={e => {
                    fileOnChange(e)
                }}/>
                <br />
                <br />
                { uploadPercentage >= 1 ? <ProgressBar value={uploadPercentage}/> : console.log("abc")}
                
                <br />
                <br />
                <button type="submit" id="create-btn">Upload</button>
                <br />
                <br />
                <br />
                <h1>{message}</h1>
            </form>
            
            </div>
        </Fragment>
    )
}
