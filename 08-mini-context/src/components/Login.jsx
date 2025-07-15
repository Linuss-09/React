import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    // we gonna need some states for username and password so 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")

    // how to send data ??  or write data 
    // setUasr ko bulao using userConatext thing which we made in context folder
    const {setUser} = useContext(UserContext)

    // use it here simply....yayyyyyyy!!!!
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    

  return (
    <div>
        <h3>Login</h3>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Login