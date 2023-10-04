import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({}) {
 
  return (
    <h1>Hello, {name}</h1>   //  In questo caso react cerca di estrarre dalla funzione l'argomento "name" ma non lo trova considerandolo non definito
  )
}

export default App

 