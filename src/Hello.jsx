import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Messaggio from './Messaggio';

const hello = () => {
    return (
     <>
    <h2>Hello, World!</h2>
    <Messaggio />
    </>
    )
}

export default hello;