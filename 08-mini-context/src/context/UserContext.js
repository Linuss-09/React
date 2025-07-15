import React from "react";

// part 1
// creates the fkin context object
const UserContext = React.createContext()

export default UserContext;


// badically after this humko iska ek provider bhi banana padta hai that will basically provide ur context to the elements 
// toh jo bhi compnent honge inside thatprivder will be able to access the context 

{/* <UserContext>
    <login />
<card>
    <Data/>
</card>
<UserCntext/> */}
