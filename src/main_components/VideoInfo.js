import React from 'react'

export const VideoInfo = ({ videoInfo }) => {
    return (
        <div>
            <br />
            <br />
            <p style={{textAlign: 'center'}}>{videoInfo.video2.originalName}</p>
            <br />
            <hr style={{width: 1200, margin: 'auto', color: 'grey'}}/>
            <br />
            <div style={{ display: 'flex', width: 100, justifyContent: 'space-around', margin: 'auto'}}>
                <img src="/userIconDefault.png" style={{width: 25, height: 25}} id="abcd"alt="abc"></img>
                <p>{videoInfo.user2.username}</p>
            </div>
            <br />
            <br />
            <p style={{textAlign: 'center'}}>{videoInfo.video2.description}</p>
            <hr style={{width: 1200, margin: 'auto', color: 'grey'}}/>
            <br />
            <br />
            
        </div>
    )
}
