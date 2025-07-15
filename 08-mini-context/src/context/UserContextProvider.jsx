import React from "react";
import UserContext from "./UserContext";

// create a method called user context provider 
const UserContextProvider = ({children}) => {

    // creating some data jo humne pass karna hai basically
    const [user, setUser] = React.useState(null)

    return(
        // here chlidren basically means jo bhi you'll put inside this <>

        // </>


        <UserContext.Provider value={{user, setUser}}>
            {/* here value prop is basically humko baccho ko kya provide karana hai so the things you want to avialbel for ur children just pass em here mfk 
            
            Here, you’re passing an object: {user, setUser}.
            This means any component inside can use the context to:
            Read the current user value.
            Update the user using setUser.

            */}
            {children}
            {/* these children can be navpar and profile and all */}

        </UserContext.Provider>
    )
}

export default UserContextProvider