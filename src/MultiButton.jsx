const MultiButton = () => {
    const handleButtonClick = (event) => {
        console.log(event.target.name);
    }

    return (
        <>
        <button name="one" onClick={handleButtonClick}>Click Me</button>
        <button name="two" onClick={handleButtonClick}>Click Me</button>
        <button name="three" onClick={handleButtonClick}>Click Me</button>
        </>
    )
}

export default MultiButton;


