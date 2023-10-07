import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() =>{
        setInterval(() =>{
            setDate(new Date())
        }, 1000)

    }, [])

    return (
        <>
        <h2>L'orario aggiornato è: {date.toLocaleTimeString()}</h2>
        </>
    )


}

export default Clock;