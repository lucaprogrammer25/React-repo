const MouseClicker = () => {
    const handleButtonClick = (event) => {
        console.log(event.currentTarget.name);
    }

    return (
        <>
        <button name="one" onClick={handleButtonClick}>
            <img width={30} height={30} />Click Me</button>
        </>
    )
}

export default MouseClicker