import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export const LiveCodeChallengeEditor = () => {
    const [Data, setData] = useState()
    const { id } = useParams()
    useEffect(() => {
        console.log(id)
    }, [])

    const onChangeHtml = (e) => {
        var output = document.getElementById('output')
        var script = document.createElement('script')
        script.innerHTML = document.getElementById('JSinput').value
        output.innerHTML = document.getElementById(e.target.id).value
        script.id = "jsMain"
        output.appendChild(script)
        console.log(document.getElementById(e.target.id).value)
        console.log(e)
    }

    const onCssChange = (e) => {

        console.log('abxdx')
        console.log(document.getElementById('CSSinput').value)
        document.getElementById('hello').innerHTML = document.getElementById('CSSinput').value
    }

    const onChangeJS = (e) => {
        console.log('abxdx')
        console.log(document.getElementById('JSinput').value)
        document.getElementById('jsMain').innerHTML = document.getElementById('JSinput').value.toString()
    }
 

    return (
        <div>
  
            <div id="challenge">
                So make a program that will add 2 numbers
            </div>
            <br />
            <br />
            <div id="codepen">
            <div id="HTML">
                <textarea id="HTMLinput" placeholder="HTML" onChange={onChangeHtml}></textarea>
            </div>
            <div id="CSS">
                <textarea id="CSSinput" placeholder="CSS" onChange={onCssChange}></textarea>
            </div>
            <div id="JS">
                <textarea id="JSinput" placeholder="JS" onChange={onChangeJS}></textarea>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div id="output">
            
            </div>

            
    
    
  </div>
  
    )
}
