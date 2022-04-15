// localStorage - saving car data
const saveCarDataToLocalStorage = (carData) => {
	window.localStorage.setItem("carId", JSON.stringify(carData.id));
	window.localStorage.setItem("carBrand", carData.brand);
	window.localStorage.setItem("carModel", carData.model);
	window.localStorage.setItem("carBasePrice", JSON.stringify(carData.price));
	window.localStorage.setItem("carYear", JSON.stringify(carData.year));
	window.localStorage.setItem("carOdometer", JSON.stringify(carData.odometer));
	window.localStorage.setItem("carPower", JSON.stringify(carData.power));
	window.localStorage.setItem("carBasePrice", JSON.stringify(carData.price));
	window.localStorage.setItem("carPicture", carData.picture);

	let carAccessories = carData.accessories;
	savePossibleAccessoriesToLocalStorage(carAccessories);

}

// localStorage - saving possible accessories to localStorage
const savePossibleAccessoriesToLocalStorage = (carAccessories) => {
	let arrayItemsAccessories = [];
	for (let i = 0; i < carAccessories.length; i++) {
		arrayItemsAccessories.push(parseInt(carAccessories[i].id))
		window.localStorage.setItem(`accessory0${arrayItemsAccessories[i]}Id`, JSON.stringify(carAccessories[arrayItemsAccessories[i] - 1].id));
		window.localStorage.setItem(`accessory0${arrayItemsAccessories[i]}Name`, JSON.stringify(carAccessories[arrayItemsAccessories[i] - 1].name));
		window.localStorage.setItem(`accessory0${arrayItemsAccessories[i]}Price`, JSON.stringify(carAccessories[arrayItemsAccessories[i] - 1].price));
		window.localStorage.setItem(`accessory0${arrayItemsAccessories[i]}Chosen`, JSON.stringify(false));
	};
};

// Save owner name
const saveName = () => {
	ownerName = getData(nameField);
	window.localStorage.setItem("owner", ownerName);
}

// localStorage - getting data
// Getting data from localStorage
const getDataFromLocalStorage = () => {
	let storageCar = {};

	storageCar.id = Number(window.localStorage.getItem("carId"));
	storageCar.brand = window.localStorage.getItem("carBrand");
	storageCar.model = window.localStorage.getItem("carModel");
	storageCar.price = Number(window.localStorage.getItem("carBasePrice"));
	storageCar.year = Number(window.localStorage.getItem("carYear"));
	storageCar.odometer = Number(window.localStorage.getItem("carOdometer"));
	storageCar.power = Number(window.localStorage.getItem("carPower"));
	storageCar.picture = window.localStorage.getItem("carPicture");

	return {
		"car": storageCar,
		"owner": window.localStorage.getItem("owner"),
		"financing": window.localStorage.getItem("financing"),
		"storageFinalPrice": Number(window.localStorage.getItem("carFinalPrice")),
		"possibleAccessories": getAccessoriesFromLocalStorage()[1],
		"chosenAccessories": getAccessoriesFromLocalStorage()[2]
	};
};

const getAccessoriesFromLocalStorage = () => {
	let storageAccessories = [];
	let possibleAccessoriesToAdd = [];
	let chosenAccessories = [];
	for (let i = 1; i <= 5; i++) {
		let storageAccessory = {};
		storageAccessory.id = Number(window.localStorage.getItem(`accessory0${i}Id`));
		storageAccessory.name = JSON.parse(window.localStorage.getItem(`accessory0${i}Name`));
		storageAccessory.price = Number(window.localStorage.getItem(`accessory0${i}Price`));
		storageAccessory.chosen = JSON.parse(window.localStorage.getItem(`accessory0${i}Chosen`));

		if (!storageAccessory.chosen) {
			possibleAccessoriesToAdd.push(storageAccessory);
		} else if (storageAccessory) {
			chosenAccessories.push(storageAccessory);
		};

		storageAccessories.push(storageAccessory);
	};
	return [storageAccessories, possibleAccessoriesToAdd, chosenAccessories]
};

// Filling fields after refreshing
const fillForm = (storageCar, possibleAccessories, chosenAccessories, storageOwner, storageFinancing, storageFinalPrice) => {

	storageCarDescription = carDescriptionFun(storageCar);

	carChosenImage.src = storageCarDescription.carImageSource;
	carChosenImage.alt = storageCarDescription.carBrandModelDescription;
	carItemChosen.innerText = storageCarDescription.carBrandModelDescription;
	carYearChosen.innerText = storageCarDescription.carYearDescription;
	carOdometerChosen.innerText = storageCarDescription.carOdometerDescription;
	carPowerChosen.innerText = storageCarDescription.carPowerDescription;
	carPriceChosen.innerText = `${storageFinalPrice} zł`;
	addAccessoryLists(possibleAccessories, chosenAccessories, fieldForFeaturesForAdd, fieldForFeaturesAdded);
	nameField.value = `${storageOwner}`;

	if (storageFinancing === "gotówka") {
		checkedMoney.checked = true;
		checkedLeasing.checked = false;
	} else if (storageFinancing === "leasing") {
		checkedMoney.checked = false;
		checkedLeasing.checked = true;
	};
};