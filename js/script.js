let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let resultElementHighlited = document.querySelector(".js-result--highlited");

let rateUsd = 3.94;
let rateEur = 4.57;
let rateGbp = 5.41;

formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	let plnAmount = +amountElement.value;
	let currency = currencyElement.value;

	let result;

	switch (currency) {
		case "USD":
			result = plnAmount / rateUsd;
			break;
		case "EUR":
			result = plnAmount / rateEur;
			break;
		case "GBP":
			result = plnAmount / rateGbp;
			break;
	}
	resultElement.innerHTML = `${plnAmount.toFixed(2)} 
	PLN = <span class="form__result--highlited">${result.toFixed(
		2
	)} ${currency} </span>`;
});
