import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,



    className = ""
}) {

    

  return (
    <>
        {/* main card */}
        <div className={` flex justify-between rounded-md py-2 font-ibm ${className}`}>
            {/* div 1 */}
            <div className="w-1/2 flex flex-col gap-2 py-2 px-2">
                <label  className="text-center text-black font-bold tracking-wider  ">{label}</label>

                <input
            
                type="number"
                min="0"
                value={amount}
                disabled = {amountDisable}
                // when input feidl me channge ho execute this fkin fn
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                className='border-black border shadow-[2px_1px_0px_black] text-center outline-none w-full bg-white font-bold font-mono text-black'
            />
            </div>

            {/* div 2 */}
            <div className="w-1/2 flex flex-col justify-center items-center text-right px-2 py-2 gap-2">
                <label 
                className='text-black font-bold tracking-wider
                font
                '
                
                >Currency Type</label>

                <select 
                className="border shadow-[2px_1px_0px_black] bg-yellow-400 text-black text-center font-bold outline-none w-full max-w-sm 
                "
                value={selectCurrency}
                disabled= {currencyDisable}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value= {currency} >
                            {currency}
                        </option>
                    ) )}
                </select>
            </div>
        </div>
    </>
  )
}

export default InputBox 