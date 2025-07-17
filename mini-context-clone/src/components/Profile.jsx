import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) {
        return <div className=' bg-red-400 mt-2 text-lg'>Log in mfk</div>
    }

    return <div className='text-black bg-cyan-800 duration-75 text-lg mt-2'>Hii {user.username} </div>

}

export default Profile  