import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    // call user from there i mean like userContext se bulao bc ko 
    const {user} = useContext(UserContext) 

  if(!user) return <div>please Login</div>
  
  return <div>Welcome {user.username}</div>

}

export default Profile  