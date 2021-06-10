/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import  io  from 'socket.io-client';
import { useParams } from 'react-router';
import queryString from 'query-string'

let socket;

const Chat = () => {

    return (
        <div className="card">
           <h1>Chat Page</h1>
        </div>
        
    )
}

export default Chat
