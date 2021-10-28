{
	const calculateResult = (plnAmount, currency) => {
		const rateUsd = 3.94;
		const rateEur = 4.57;
		const rateGbp = 5.41;

		switch (currency) {
			case "USD":
				return plnAmount / rateUsd;

			case "EUR":
				return plnAmount / rateEur;

			case "GBP":
				return plnAmount / rateGbp;
		}
	};

	const updateResultText = (plnAmount, result, currency) => {
		const resultElement = document.querySelector(".js-result");
		resultElement.innerHTML = `${plnAmount.toFixed(2)} PLN = <span class="form__result--highlited">${result.toFixed(2)} ${currency} </span>`;
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const amountElement = document.querySelector(".js-amount");
		const currencyElement = document.querySelector(".js-currency");

		const plnAmount = +amountElement.value;
		const currency = currencyElement.value;

		const result = calculateResult(plnAmount, currency);
		updateResultText(plnAmount, result, currency);
	};

	const init = () => {
		const formElement = document.querySelector(".js-form");

		formElement.addEventListener("submit", onFormSubmit);
	};

	init();
}
