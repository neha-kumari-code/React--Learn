import React, { useId, useState } from 'react'
import  './currencyBox.css'
import UseCurrencyInfo from './UseCurrencyInfo'

const CurrencyBox = ({label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usd",amountDisable=false,currencyDisable}) => {
  const amountInputId=useId();
  return (
    

    <div className='box'>
        <div className='inputBox' >
            <label htmlFor={amountInputId}>{label}</label>
            <input id={amountInputId} type='Number' placeholder='Amount' disabled={amountDisable}
            value={amount} onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}  />
        </div>

       <div className='selectBox'>
          <p>Currency Type</p>
          <select value={selectCurrency} onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
          {
            currencyOptions.map((option)=>(
              <option key={option} value={option}>{option}</option>
            ))
          }
          </select>
      </div>
    </div>
    
  )
}

export default CurrencyBox