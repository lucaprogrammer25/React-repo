import Button from "./Buttom"

const AlertClock = () => {
    const handleButtonClick = () => {
        const now = new Date()

        alert(`Sono le ${now.toLocaleTimeString()}`)
    }


    return(
        <>
        <p>Clicca qui per sapere l'ora</p>
        <Button onClick={handleButtonClick} label="Click me"/>
        </>
    )
}

export default AlertClock