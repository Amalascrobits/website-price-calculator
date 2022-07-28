// import { useState, useEffect } from 'react';
// // import './App.css';
// import CurrencyInput from './CurrenyInput';
// import axios from "axios";

// function Converter() {

//   const [amount1, setAmount1] = useState(1);
//   const [amount2, setAmount2] = useState(1);
//   const [currency1, setCurrency1] = useState('USD');
//   const [currency2, setCurrency2] = useState('EUR');
//   const [exchange_rates, setExchange_Rates] = useState([]);

//   // rum in terminal: npm add axios
//   useEffect ( () => {
//     axios.get('https://exchange-rates.abstractapi.com/v1/live/?api_key=c45cd40c8f534b03bb6a7fdde6243fef&base=USD')
//     .then(response => {
//       setExchange_Rates(response.data.exchange_rates);
//     })
//   }, []);

//   useEffect(() => {
//     if(!!exchange_rates){
//       handleAmount1Change(1);
//     }
//   }, [exchange_rates]);

//   function format(number) {
//     return number.toFixed(4);
//   }

//   function handleAmount1Change(amount1) {
//     setAmount2(format(amount1 * exchange_rates[currency2] / exchange_rates[currency1] ));
//     setAmount1(amount1);
//   }

//   function handleCurrency1Change(currency1){
//     setAmount2(format(amount1 * exchange_rates[currency2] / exchange_rates[currency1] ));
//     setCurrency1(currency1);
//   }

//   function handleAmount2Change(amount2) {
//     setAmount1(format(amount2 * exchange_rates[currency1] / exchange_rates[currency2] ));
//     setAmount2(amount2);
//   }

//   function handleCurrency2Change(currency2){
//     setAmount1(format(amount2 * exchange_rates[currency1] / exchange_rates[currency2] ));
//     setCurrency2(currency2);
//   }

//   return (
//     <div>
//     <h1>Currency Convertor</h1>
//     <CurrencyInput
//      onAmountChange={handleAmount1Change}
//      onCurrencyChange={handleCurrency1Change}
//      currencies={Object.keys(exchange_rates)} 
//      amount={amount1}
//       currency={currency1} />

//     <CurrencyInput
//      onAmountChange={handleAmount2Change}
//      onCurrencyChange={handleCurrency2Change}
//      currencies={Object.keys(exchange_rates)}
//      amount={amount2}
//      currency={currency2} />
//     </div>
//   );
// }

// export default Converter;