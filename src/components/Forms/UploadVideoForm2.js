import axios from 'axios';
import React, { Fragment, useState } from 'react';
import ProgressBar from '../ChildrenComponents/ProgressBar';

const UploadVideoForm2 = () => {

    const [File, setFile] = useState();
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const fileOnChange = e => {
        setFile(e.target.files[0]);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", File);   

        const abc = process.env.REACT_APP_SERVER

        try {
            await axios.post(abc + 'videos/create_video_pt_2', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-type, Accept,  X-Custom-Header',
                    // 'Access-Control-Request-Method': 'POST'
                },

                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100)/ progressEvent.total)))
                }
                
            }).then(res => {
                setMessage('File Uploaded')
                console.log(res)
               localStorage.setItem('thumbnailFileName', res.data.thumbnailFileName)
                window.location = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/UploadVideo3"                
            })
            
        } catch (err) {
           if (err) {
               if (err.response.status === 500) {
                   setMessage('There Was A problem with the server')
               } else {
                   setMessage(err.response.data.msg)
               }
           } 
        }
    } 

    return (
        <div>
            <Fragment>
            <br />
            <br />
            <br />
            <div id="upload-video">
             <form method="POST" onSubmit={onSubmit}>
                <br />
                <br />
                <h1>Upload A Thumbnail for your video...</h1>
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
        </div>
    )
}

export default UploadVideoForm2
