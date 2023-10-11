const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        console.log(data)
    }


    return (
        <form onSubmit={handleFormSubmit}>
        <input name="username"/>
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button>Login</button>
        <button type="reset">Reset</button>
        </form>
    )
    
}

export default UncontrolledLogin