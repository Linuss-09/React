import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  // the major philosohy of usin this shit here is that we can directly get the values from the context into the componets...so now the components here have the acess of user and setUser here 


    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h1>Hi tailwind </h1>
        <div className="mt-2 border p-2 space-x-2">

            <input type="text"
            placeholder='username'

            // basically we are saying here ki hey input field listen...whatevetrt the value is in username state you display that here 
            value={username}

            // here we saying that whenever someone types in..you take the new text(e.target.value) and update the username state with that new text using setUsername fn 
            onChange={(e) => setUsername(e.target.value)}
            className='border text-red-400' />


            <input type="password"
            className='border'
            placeholder='password'
            // jo bhi value password state me hai u gotta display that here
            value={password}
            // whenever user types in...takes that new pw(e.target.value) and updates the password state with new pw using setPassword fn 
            onChange={(e) => setPassword(e.target.value)}
            />
            <button 
            type="submit"
            onClick={handleLogin}
            >Login</button>
        </div>
    </div>
  )
}

export default Login