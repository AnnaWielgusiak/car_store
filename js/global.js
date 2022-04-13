// Car description
const carDescriptionFun = (car) => {
	const carBrandModelDescription = `${car.brand} / ${car.model}`;
	const carYearDescription = `${car.year} rok`;
	const carOdometerDescription = `${car.odometer} km`;
	const carPowerDescription = `${car.power} KM`;
	const carPriceDescription = `${car.price} zł`;
	const carImageSource = `${car.picture}`;

	return {
		"carBrandModelDescription": carBrandModelDescription,
		"carYearDescription": carYearDescription,
		"carOdometerDescription": carOdometerDescription,
		"carPowerDescription": carPowerDescription,
		"carPriceDescription": carPriceDescription,
		"carImageSource": carImageSource
	};
};

// Fill accessories
const addAccessoryLists = (possibleAccessories, chosenAccessories, fieldForFeaturesForAdd, fieldForFeaturesAdded) => {
	fieldForFeaturesForAdd.innerHTML = "";
	fieldForFeaturesAdded.innerHTML = "";
	fieldForFeaturesForAdd.innerHTML = possibleAccessories.map(accessory => `<option value=${accessory.id}> ${accessory.name}: ${accessory.price} zł </option>`).join('');
	fieldForFeaturesAdded.innerHTML = chosenAccessories.map(accessory => `<option value=${accessory.id}> ${accessory.name}: ${accessory.price} zł </option>`).join('');
}

// Operation between lists of accessories
// Adding and removing accessories and acctualisation of final price
const createAccessory = (carAccessories, chosenAccessoryId) => {
	const chosenAccessory = {};
	chosenAccessory.id = carAccessories[chosenAccessoryId].id;
	chosenAccessory.name = carAccessories[chosenAccessoryId].name;
	chosenAccessory.price = carAccessories[chosenAccessoryId].price;
	return chosenAccessory;
};

const createOption = (accessory) => {
	let option = document.createElement("option");
	option.value = accessory.id;
	option.innerText = `${accessory.name}: ${accessory.price} zł`;
	return option;
};

const addRemoveBeetwenList = (fieldFromRemoved, fieldWhereAdd, sign, carPriceChosen) => {
	let acctualPrice = gettingAcctualPrice(carPriceChosen);
	carPriceChosen = document.getElementById("chosen-car-price");
	carAccessories = getAccessoriesFromLocalStorage()[0];
	const clickedAccessory = Number(fieldFromRemoved.options[fieldFromRemoved.selectedIndex].value) - 1;
	const chosenAccessoryId = carAccessories[clickedAccessory].id;
	const descriptionOfAccessoryToAdd = createAccessory(carAccessories, chosenAccessoryId - 1);
	const addedOption = createOption(descriptionOfAccessoryToAdd);

	fieldWhereAdd.add(addedOption);
	fieldFromRemoved.remove(fieldFromRemoved.selectedIndex);

	let finalPrice;
	if (sign === "plus") {
		finalPrice = acctualPrice + descriptionOfAccessoryToAdd.price;
		window.localStorage.setItem(`accessory0${chosenAccessoryId}Chosen`, JSON.stringify(true));

	} else if (sign === "minus") {
		finalPrice = acctualPrice - descriptionOfAccessoryToAdd.price;
		window.localStorage.setItem(`accessory0${chosenAccessoryId}Chosen`, JSON.stringify(false));
	};

	carPriceChosen.innerText = `${finalPrice} zł`;
	window.localStorage.setItem("carFinalPrice", JSON.stringify(finalPrice));
};

// Getting acctual price
const gettingAcctualPrice = (carPriceChosen) => {
	let acctualPrice;
	acctualPrice = Number(carPriceChosen.textContent.slice(0, -3));
	return acctualPrice;
};

// Add and remove accessory
addButton.addEventListener("click", () => {
	fieldFromRemoved = fieldForFeaturesForAdd;
	fieldWhereAdd = fieldForFeaturesAdded;
	addRemoveBeetwenList(fieldFromRemoved, fieldWhereAdd, "plus", carPriceChosen);

});

deleteButton.addEventListener("click", () => {
	fieldWhereAdd = fieldForFeaturesForAdd;
	fieldFromRemoved = fieldForFeaturesAdded;
	addRemoveBeetwenList(fieldFromRemoved, fieldWhereAdd, "minus", carPriceChosen);
});

// Get and check owner data
const getData = (nameField) => (nameField).value.trim();


const printUnicodNumbersSignsToDel = () => {
	let arrayOfSigns = [];
	for (let i = 91; i < 97; i++) {
		const unicodeNumberSignsToDel = String.fromCharCode(i);
		arrayOfSigns.push(unicodeNumberSignsToDel);
	};
	return arrayOfSigns;
};

const letters = () => {
	const arrayOfPolishLetters = [" ", "Ą", "ą", "Ć", "ć", "Ę", "ę", "Ł", "ł", "Ń", "ń", "Ó", "ó", "Ś", "ś", "Ż", "ż", "Ź", "ź"];
	let arrayOfLetters = arrayOfPolishLetters;
	signsToDell = printUnicodNumbersSignsToDel();
	for (let i = 65; i < 123; i++) {
		const letter = String.fromCharCode(i);
		if (signsToDell.indexOf(letter) < 0) {
			arrayOfLetters.push(letter);
		};
	};
	return arrayOfLetters;
};

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
		window.localStorage.setItem("financing", "gotówka");
	} else {
		checkedLeasing.checked = true;
		window.localStorage.setItem("financing", "leasing");
	};
};

// Check choosing financing
const checkChoosinfFinancing = () => {
	let finance;
	if (checkedMoney.checked === true) {
		finance = "gotówka";
	} else if (checkedLeasing.checked === true) {
		finance = "leasing";
	};
	return finance;
};

//Changing financing
checkedMoney.addEventListener("click", () => {
	changeCheck(checkedMoney, checkedLeasing);
});
checkedLeasing.addEventListener("click", () => {
	changeCheck(checkedLeasing, checkedMoney);
});

// Creating delivery data
const changeValueToString = (value) => {
	let valueString;
	if (value < 10) {
		valueString = String(`0${value}`);
	} else {
		valueString = String(value);
	};
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

//Filling delivery data
deliveryField.value = deliveryData();
deliveryField.min = deliveryData();
deliveryField.max = deliveryData();

// Getting owner data and display summary
buyButton.addEventListener("click", () => {
	let finalPriceToGive = gettingAcctualPrice(carPriceChosen);
	if (getAndCheckOwnerData() === null) {
		showAlertDiv();
		hide(summaryDiv);
	} else {
		displaySummary(storageCar, checkChoosinfFinancing(), deliveryData(), finalPriceToGive);
	}
});

//Back to the car list
backButton.addEventListener("click", () => {
	showCarList();
});