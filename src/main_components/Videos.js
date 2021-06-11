import React from 'react'

export const Videos = () => {
    let abc;
    return (
        
        <div>
            { abc = process.env.REACT_APP_SERVER }
            <a href={abc +  "uploadVideo"}>create a new video</a>
        </div>
    )
}
