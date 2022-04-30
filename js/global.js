// Getting max value of price - to filter at start
const getMaxPrice = (carsList) => {
	let arrayOfPrices = [];
	carsList.forEach(car => arrayOfPrices.push(car.price));
	return Math.max(...arrayOfPrices);
};

// Car description
const carDescriptionFun = (car) => {
	return {
		"carBrandModelDescription": `${car.brand} / ${car.model}`,
		"carYearDescription": `${car.year} rok`,
		"carOdometerDescription": `${car.odometer} km`,
		"carPowerDescription": `${car.power} KM`,
		"carPriceDescription": `${car.price} zł`,
		"carImageSource": `${car.picture}`
	};
};

// Fill accessories
const addAccessoryLists = (possibleAccessories, chosenAccessories, fieldForFeaturesForAdd, fieldForFeaturesAdded) => {
	fieldForFeaturesForAdd.innerHTML = "";
	fieldForFeaturesAdded.innerHTML = "";
	fieldForFeaturesForAdd.innerHTML = possibleAccessories
		.map(accessory => `<option value=${accessory.id}> ${accessory.name}: ${accessory.price} zł </option>`)
		.join('');
	fieldForFeaturesAdded.innerHTML = chosenAccessories
		.map(accessory => `<option value=${accessory.id}> ${accessory.name}: ${accessory.price} zł </option>`)
		.join('');
}

// Operation between lists of accessories
// Adding and removing accessories and acctualisation of final price
const createAccessory = (carAccessories, chosenAccessoryId) => {
	return {
		id: carAccessories[chosenAccessoryId].id,
		name: carAccessories[chosenAccessoryId].name,
		price: carAccessories[chosenAccessoryId].price
	}
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
const gettingAcctualPrice = (carPriceChosen) => Number(carPriceChosen.textContent.slice(0, -3));

// Add and remove accessory
addButton.addEventListener("click", () => addRemoveBeetwenList(fieldForFeaturesForAdd, fieldForFeaturesAdded, "plus", carPriceChosen));

deleteButton.addEventListener("click", () => addRemoveBeetwenList(fieldForFeaturesAdded, fieldForFeaturesForAdd, "minus", carPriceChosen));

// Get and check owner data
const getData = (nameField) => (nameField).value.trim();

// Check signs - unicode
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
	return gettingName.split('').filter(name => !signs.includes(name));
};

const checkNameSpaces = (gettingName) => gettingName.split('').filter(sign => sign === " ");

const checkName = (gettingName) => {
	let signsInName = checkNameSigns(gettingName);
	let spacesInName = checkNameSpaces(gettingName);
	return !(signsInName.length > 0 || spacesInName.length > 1);
};

const getAndCheckOwnerData = () => {
	let ownerName = getData(nameField);
	let printAlert = checkName(ownerName);
	let ownerDataForSummary;

	if (ownerName.length = 0 || printAlert === false) {
		show(alertSection);
		alertSection.scrollIntoView();
		ownerDataForSummary = null;
	} else {
		hide(alertSection);
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
const checkChoosinfFinancing = () => checkMoney.checked ? "gotówka" : "leasing";

//Changing financing
checkedMoney.addEventListener("click", () => changeCheck(checkedMoney, checkedLeasing));
checkedLeasing.addEventListener("click", () => changeCheck(checkedLeasing, checkedMoney));

// Creating delivery data
const changeValueToString = (value) => value < 10 ? String(`0${value}`) : String(value);

const deliveryData = () => {
	let today = new Date();
	let twoWeeks = new Date();
	twoWeeks.setDate(today.getDate() + 14);
	return `${String(twoWeeks.getFullYear())}-${changeValueToString(twoWeeks.getMonth()+1)}-${changeValueToString(twoWeeks.getDate())}`;
};

//Filling delivery data
deliveryField.value = deliveryData();
deliveryField.min = deliveryData();
deliveryField.max = deliveryData();

// Getting owner data and display summary
buyButton.addEventListener("click", () => {
	if (!getAndCheckOwnerData()) {
		showAlertSection();
		hide(summarySection);
	} else {
		displaySummary(storageCar, checkChoosinfFinancing(), deliveryData(), gettingAcctualPrice(carPriceChosen));
		window.localStorage.clear();
	}
});

//Back to the car list
backButton.addEventListener("click", () => showCarList());