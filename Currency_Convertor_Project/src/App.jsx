import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyBox from './CurrencyBox'
import UseCurrencyInfo from './UseCurrencyInfo'


function App() {
  const [amount,setamount]=useState(0);
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const [amountconverted,setamountconverted]=useState(0)
  const currencyInfo=UseCurrencyInfo(from);
 
  const options=Object.keys(currencyInfo);
  function swap(){
    setfrom(to);
    setto(from);
    setamountconverted(amount);
    setamount(amountconverted);
  }
  const convert=()=>{
    setamountconverted(amount*currencyInfo[to]);
  }
  return (
    <div className='body'>

<div className='project'>
  <h2>Currency Convertor Project</h2>
<form  onSubmit={(e)=>{e.preventDefault();
  convert();
}}>
<div className='Box1'>
  <CurrencyBox label="from" amount={amount} currencyOptions={options} 
   onAmountChange={(amount)=>setamount(amount)} selectCurrency={from}
   onCurrencyChange={(currency)=>setfrom(currency)}  />
</div>
<div>
  <button className='swapbtn' onClick={swap}>swap</button>
</div>
<div className='Box2'>
  <CurrencyBox label="To" amount={amountconverted} currencyOptions={options}
   onCurrencyChange={(currency)=>setto(currency)} selectCurrency={to}  />
</div>
<div>
  <button className='submitbtn' type='submit'>convert {from} to {to} </button>
</div>
</form>
</div>
    </div>
  )
}

export default App
