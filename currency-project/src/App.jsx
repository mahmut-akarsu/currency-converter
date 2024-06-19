import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import './currency.css'

const BASE_URL="https://api.freecurrencyapi.com/v1/latest"
const API_KEY="fca_live_M6KzkeXDjlQRwzRR8Bw7oMenBoavmpyH8DsgfX7k"


function App() {
  
  const[amount,setAmount]=useState(1);
  const[fromCurrent,setFromCurrent]=useState('TRY');
  const[toCurrent,setToCurrent]=useState('USD');
  const[result,setResult]=useState(0);

  const exchange= async () => {
    var response= await axios.get(`${BASE_URL}/?apikey=${API_KEY}&base_currency=${fromCurrent}`)
    var to= await response.data.data[toCurrent]
    setResult(to*amount)
  }

  const handleChange=()=>{
    var temp=toCurrent;
    setToCurrent(fromCurrent)
    setFromCurrent(temp)
  }
  

  useEffect(()=>{
    exchange()
  },[amount,fromCurrent,toCurrent])
 
    return (
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="exchange-form">
          <input value={amount} onChange={(e)=>{setAmount(e.target.value)}}
            type="number"
            placeholder="Miktar"
            step="1"
          />
          <select value={fromCurrent} onChange={(e)=>{
            setFromCurrent(e.target.value)
          }}>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PLN">PLN</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
          
          </select>
          <div style={{padding:15}} onClick={handleChange}>
          <button className="exchange-button">
            ⇔
          </button>
          </div>
          
          <select value={toCurrent} onChange={(e)=>setToCurrent(e.target.value)}>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PLN">PLN</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
          </select>
          <input
          value={result}
          onChange={(e)=>setResult(e.target.value)}
            type="number"
            placeholder="Miktar"
            step="1"
          />
        </div>
        <div className="result"></div>
      </div>
    );
  }
  

  


export default App;
