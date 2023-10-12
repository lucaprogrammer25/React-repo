import React, { useRef, useEffect } from 'react';

const FocusableInput = () => {
    const mountendRef = useRef(false)
    
  useEffect(() => {
    if(!mountendRef.current){
        mountendRef.current = true
        console.log("Mounting for the first time")
    } else {
        console.log("Mounting again for debug puroposes");
    }
  }, []);


  return (
     <h1>Hello World!</h1>
  )
};

export default FocusableInput;
