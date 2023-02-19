const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const fromAmountInput = document.getElementById("from-amount");
const toAmountInput = document.getElementById("to-amount");
const convertButton = document.getElementById("convert-button");

// Fetch exchange rates from an API

async function getData() {
  let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  let data = await response.json();
  const currencyCodes = Object.keys(data.rates);
  // Add options to the select elements
  for (const currencyCode of currencyCodes) {
    const option = document.createElement("option");
    option.value = currencyCode;
    option.text = currencyCode;
    fromCurrencySelect.add(option.cloneNode(true));
    toCurrencySelect.add(option);
  }
  // Convert when the button is clicked
  convertButton.addEventListener("click", () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const fromAmount = fromAmountInput.value;
    const toAmount = (fromAmount * data.rates[toCurrency]).toFixed(2);
    toAmountInput.value = toAmount;
  });
}

getData();

// fetch("https://api.exchangerate-api.com/v4/latest/USD")
//   .then((response) => response.json())
//   .then((data) => {
//     const currencyCodes = Object.keys(data.rates);
//     // Add options to the select elements
//     for (const currencyCode of currencyCodes) {
//       const option = document.createElement("option");
//       option.value = currencyCode;
//       option.text = currencyCode;
//       fromCurrencySelect.add(option.cloneNode(true));
//       toCurrencySelect.add(option);
//     }
//     // Convert when the button is clicked
//     convertButton.addEventListener("click", () => {
//       const fromCurrency = fromCurrencySelect.value;
//       const toCurrency = toCurrencySelect.value;
//       const fromAmount = fromAmountInput.value;
//       const toAmount = (fromAmount * data.rates[toCurrency]).toFixed(2);
//       toAmountInput.value = toAmount;
//     });
//   });
