const MouseClicker = () => {
    const handleButtonClick = (event) => {
        console.log(event.currentTarget.name);
    }

    return (
        <>
        <button name="one" onClick={handleButtonClick}>
            <img src="" onClick={handleButtonClick} width={30} height={30} />Click Me</button>
        </>
    )
}

export default MouseClicker

// /L'attributo name del pulsante viene comunque stampato sulla console quando si fa clic sull'immagine perchè l'evento onClick è associato all'elemento su cui è stato definito
//  (in questo caso, l'immagine), quindi quando viene cliccato l'immagine, verrà eseguito solo il codice associato a quell'evento ovvero handleButtonClick./