import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'



function App() {
  

  return (
     <div style={{
      backgroundColor:"green",
      borderRadius:"10px",
      width:"fit-content"
     }}>
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1}  />
      </div>
  )
}

export default App
