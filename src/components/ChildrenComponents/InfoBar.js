import React, { useEffect, useState } from 'react'

export const InfoBar = ({text}) => {

    const [hello, sethello] = useState()
    const [PxHeight, setPxHeight] = useState()
    const [PxWidth, setPxWidth] = useState()
    const [areaDiv, setareaDiv] = useState()
    useEffect(() => {
        setTimeout(function() {
            sethello(text.split('').length)
            setPxHeight(document.getElementById('fefe').offsetHeight)
            setPxWidth(document.getElementById('fefe').offsetWidth)
            setareaDiv(PxHeight * PxWidth / hello)
            console.log(areaDiv, PxHeight * PxWidth / hello)
        }, 10)
        
    }, [PxWidth, PxHeight, setPxWidth, setPxHeight, areaDiv, setareaDiv, hello, sethello, text])

    

    const onClickClose = (e) => {
        const ele = document.getElementById('infoBar')
        ele.classList.remove('transBottom')
        ele.classList.add('transTop')
        
        // document.getElementById('infoBar').parentNode.removeChild(document.getElementById('infoBar'))
        


    }


    return (
        <div id="infoBar">
            <div id="content">
                <img src="/information.png" alt="information" width="60px"></img>
                <div id="fefe"style={{width: '10vw', margin: 8, overflowWrap: 'break-word', height: '.89vh', display: 'flex', alignItems: 'center'}}>
                <p id="text33" style={{fontSize: areaDiv, }}>{text}</p>
                </div>
            </div>

            <button style={{paddingLeft: 2, paddingRight: 2, borderRadius: 2, border: '1px black solid'}} id="closeInfoPopupBtn" onClick={onClickClose}>X</button>
            <br />
        </div>


    )
}
