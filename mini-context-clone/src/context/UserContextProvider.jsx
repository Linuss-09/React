import {useState} from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("")

    // used children jiska basically mtlb hai iske andar jo bhi hai sb pr yeh sb chizein apply karo 
    return (

        // value is basically the data which we want our children to share with 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider