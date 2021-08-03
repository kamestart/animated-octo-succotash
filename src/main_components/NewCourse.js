import React, { useEffect } from 'react'

export const NewCourse = () => {
    useEffect(() => {
        if (localStorage.getItem('sid') != null && localStorage.getItem('sid') !== undefined) {
            window.location = window.location.protocol + "//" + window.location.hostname + "/"
        }
    }, [])
    return (
        <div>

        </div>
    )
}
