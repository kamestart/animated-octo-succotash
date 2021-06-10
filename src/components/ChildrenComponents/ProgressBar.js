import React from 'react'

const ProgressBar = ({ value }) => {
    return (
    <div className="progress" data-label={value + "%"}>
        <span className="value" style={{width: value + "%",
            borderRadius: "20px",  
            textAlign: "center", 
            
        }}>{value + "%"}</span>
      </div>
    )
}

export default ProgressBar;