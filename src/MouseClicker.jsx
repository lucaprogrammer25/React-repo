const MouseClicker = () => {
    const handleButtonClick = (event) => {
        console.log(event.target.name);
    }

    return (
        <>
        <button name="one" onClick={handleButtonClick}>
            <img src="" onClick={handleButtonClick} width={30} height={30} />Click Me</button>
        </>
    )
}

export default MouseClicker


//possiamo impedire di stampare name al click dell'img usando event.target.name