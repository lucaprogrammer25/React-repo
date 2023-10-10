import { useState } from "react"

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    }
    )
    const handleInputChange = (event) => {
const name = event.target.name
const value = event.target.value 
const checked = event.target.checked 
const type = event.target.type

setData((data) => {
    return {
        ...data,
        [name] : type === 'checkbox' ? checked : value,
    }
})
    }

    return (
        <>
        <input name="username" value={data.username} onChange={handleInputChange} placeholder="username" />
        <input name="password" value={data.password} onChange={handleInputChange} placeholder="password" />
        <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
        </>
    )
        
    
}

export default Login