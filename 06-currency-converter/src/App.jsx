import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo2 from './hooks/useCurrencyInfo2'

function App() {

  const [amount, setAmout] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo2(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmout(convertedAmount)
  }

  const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])

  }

return (
        // body div
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
                        backgroundImage: "url('https://i.pinimg.com/736x/04/87/31/048731fef5252cbb78ef4bbb2b812fee.jpg')"
                    }}
                >
                  {/* container div for the glass div to postition it */}
            <div className="w-full">
              {/* glass div */}
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => { 
                            e.preventDefault();
                            convert()
                        }}
                    >
                      {/* div 1 for the input kinda thing  */}
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                  setFrom(currency)
                                }}
                                selectCurrency={from}
                                onAmmountChange={(amount) => setAmout(amount)}
                            />
                        </div>

                        {/* div for swap btn*/}
                        <div className="relative w-full h-0.5">
                          {/* actual swap btn */}
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        {/* div-2 for the input kinda thing */}

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => {
                                  setTo(currency)
                                }}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>

                        {/* submit btn of form */}
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
