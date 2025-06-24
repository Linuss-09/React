// using react snippets extension
import React from "react";

function Card({username, btnText = "visit me"}) {

    // {username, btnText = "visit me"} its just a way of passing default values to variables

// function Card(props) { // u can write in this way aswell so yeah :))
    // console.log("props", props);
    
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="rounded-md" src="https://i.pinimg.com/736x/f0/00/cb/f000cb054e6cf6db17de787c28d9a7b5.jpg" alt="Sunset in the mountains"></img>
        <div className="px-6 py-4">
            {/* user curly braces to put th value form the username  */}
            <div className="font-bold text-xl mb-2"> {username} </div>
            <p className="text-violet-200 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>

            <button className="bg-violet-400 mt-4 ">{btnText || 
            "Visit me" } </button>

        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
        </div>
        </div>
    )
}

export default Card