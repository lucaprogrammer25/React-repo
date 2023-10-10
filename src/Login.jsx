import { useState } from "react"

const Login = ({stateLogin}) => {
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

    const handleResetButton = () => {
        setData({
            username: '',
            password: '',
            remember: false,
        })
    }

 

    return (
        <>
        <input name="username" value={data.username} onChange={handleInputChange} placeholder="username" />
        <input name="password" value={data.password} onChange={handleInputChange} placeholder="password" />
        <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
        <button disabled={!data.username || !data.password} onClick={stateLogin}>Login</button>
        <button disabled={!data.username || !data.password} onClick={handleResetButton}>Reset</button>
        </>
    )
        
    
}

export default Login