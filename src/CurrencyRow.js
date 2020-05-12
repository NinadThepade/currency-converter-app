import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions, 
    selectedCurrency, 
    handleCurrencyChange,
    handleInputChange,
    amount
  } = props
  
  return (
    <form>
      <input type="number" className="inputBox" value={amount} onChange={handleInputChange}></input>
      <select className="currencySelect" value={selectedCurrency} onChange={handleCurrencyChange}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </form>
  )
}
