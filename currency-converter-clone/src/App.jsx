import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(1)
  // Set default currency to 'usd' for both from and to
  const [from, setFrom] = useState('usd')
  const currencyInfo = useCurrencyInfo(from)
  // teh arr of keys from the currencyInfo
  const options = Object.keys(currencyInfo)
  const [to, setTo] = useState('inr')

  const convertedAmount = (amount * (currencyInfo[to] || 0)).toFixed(2)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }




  return (
    <>
    {/* body div */}
      <div className="bg-blue-200 h-screen w-full flex justify-center items-center bg-cover "
      >



      {/* container div */}
      <div className=" w-full py-2">
        {/* glass div */}
        <div className="w-full max-w-md mx-auto border-2  border-black bg-violet-50  rounded-sm shadow-[4px_6px_0px_black] 
        p-5
        ">

          <h1 className="text-center font-bold text-2xl font-family-ibm underline underline-offset-2 ">Currency converter </h1>

          <form className="p-4 "
          onSubmit={(e) => e.preventDefault()}
          >
            {/* div 1 for input */}
            <div className="text-white border-black shadow-[2px_3px_0px_black] border bg-purple-500 rounded-sm mb-1 px-1">
              
              <InputBox 
              label= "From"
              amount = {amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              ></InputBox>

            </div>

            {/* div for swap btn */}
            <div className="relative w-full h-1">

              {/* swap btn */}
              <button 
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-red-400 px-2 py-0.5 rounded-sm shadow-[1px_2px_0px_black] font-ibm font-bold tracking-wider hover:border-none duration-200 "
              type='button'
              onClick={swap}
              >
                Swap
              </button>

            </div>


            {/* div 2 for output */}
            <div className=" text-white border-black border shadow-[2px_3px_0px_black] bg-cyan-600 rounded-sm px-1">
              
              <InputBox
              label = "To"
              amount = {convertedAmount}
              amountDisable = {true}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={ (currency) => setTo(currency)}
              ></InputBox>

            </div>

          </form>
        </div>
      </div>


      </div>
    </>
  )
}

export default App
