// Getting acctual price
const gettingAcctualPrice = (carPriceChosen) => {
	let acctualPrice;
	acctualPrice = Number(carPriceChosen.textContent.slice(0, -3));
	return acctualPrice;
}

// Get and check owner data
const getData = (nameField) => (nameField).value.trim();

const printUnicodNumbersSignsToDel = () => {
	let arrayOfSigns = [];
	for (let i = 91; i < 97; i++) {
		const unicodeNumberSignsToDel = String.fromCharCode(i);
		arrayOfSigns.push(unicodeNumberSignsToDel);
	}
	return arrayOfSigns;
}

const letters = () => {
	const arrayOfPolishLetters = [" ", "Ą", "ą", "Ć", "ć", "Ę", "ę", "Ł", "ł", "Ń", "ń", "Ó", "ó", "Ś", "ś", "Ż", "ż", "Ź", "ź"];
	let arrayOfLetters = arrayOfPolishLetters;
	signsToDell = printUnicodNumbersSignsToDel();
	for (let i = 65; i < 123; i++) {
		const letter = String.fromCharCode(i);
		if (signsToDell.indexOf(letter) < 0) {
			arrayOfLetters.push(letter);
		}
	}
	return arrayOfLetters;
}

const checkNameSigns = (gettingName) => {
	let signs = letters();

	// Check if name is inncorect - sign
	let positionOfSign = [];
	for (let i = 0; i < gettingName.length; i++) {
		if (signs.includes(gettingName[i]) === false) {
			positionOfSign.push(i);
		};
	};
	return positionOfSign;
};

const checkNameSpaces = (gettingName) => {
	let positionOfSpaces = [];
	for (let i = 0; i < gettingName.length; i++) {
		if (gettingName[i] === " ") {
			positionOfSpaces.push(i);
		}
	};
	return positionOfSpaces;
};

const checkName = (gettingName) => {
	let signsInName = checkNameSigns(gettingName);
	let spacesInName = checkNameSpaces(gettingName);
	if (signsInName.length > 0 || spacesInName.length !== 1) {
		return false;
	} else {
		return true;
	};
};

const getAndCheckOwnerData = () => {
	let ownerName = getData(nameField);
	let printAlert = checkName(ownerName);
	let ownerDataForSummary;

	if (ownerName.length = 0 || printAlert === false) {
		show(alertDiv);
		alertDiv.scrollIntoView();
		ownerDataForSummary = null;
	} else {
		hide(alertDiv);
		ownerDataForSummary = ownerName;
	};

	return ownerDataForSummary;
};

// Change check of financing
const changeCheck = (checkedMoney, checkedLeasing) => {
	if (checkedMoney.checked === true) {
		checkedLeasing.checked = false;
	} else {
		checkedLeasing.checked = true;
	};
};

// Check choosing financing
const checkChoosinfFinancing = () => {
	let finance;
	if (checkedMoney.checked === true) {
		finance = "gotówka";
	} else if (checkedLeasing.checked === true) {
		finance = "leasing";
	}
	return finance;
}

// Creating delivery data
const changeValueToString = (value) => {
	let valueString;
	if (value < 10) {
		valueString = String(`0${value}`);
	} else {
		valueString = String(value);
	}
	return valueString;
};

const deliveryData = () => {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1;
	let day = today.getDate() + 14;

	let yearString = String(year);
	let monthString = changeValueToString(month);
	let dayString = changeValueToString(day);

	let deliveryDay = `${yearString}-${monthString}-${dayString}`;
	return deliveryDay;
};

