import { useEffect, useState } from "react";

// i want ki jab yeh hook load ho ya koi ise call kare tab me isko call karau only
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // hence we using useEffect coz uske andar autometically fetch call ho jayega easily fn ke andar fn nhi banana padega

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        console.log(data);   //sync data 
    }, [currency])
    console.log(data);
    
    return data
}

export default useCurrencyInfo