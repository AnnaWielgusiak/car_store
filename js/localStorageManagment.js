// Saving to localStorage
const saveToLocalStorage = (car, owner, finalPrice) => {
	window.localStorage.setItem('carId', JSON.stringify(car.id));
	window.localStorage.setItem('carBrand', car.brand);
	window.localStorage.setItem('carModel', car.model);
	window.localStorage.setItem('carPrice', JSON.stringify(car.price));
	window.localStorage.setItem('carYear', JSON.stringify(car.year));
	window.localStorage.setItem('carOdometer', JSON.stringify(car.odometer));
	window.localStorage.setItem('carPower', JSON.stringify(car.power));
	window.localStorage.setItem('carPicture', car.picture);

	getSelectedOptions(car);

	window.localStorage.setItem('ownerName', owner.name);
	window.localStorage.setItem('ownerFinancing', owner.financing);
	window.localStorage.setItem('ownerData', owner.delivery);

	window.localStorage.setItem('finalPrice', JSON.stringify(finalPrice));

}
// Getting data from localStorage
const getDataFromLocalStorage = () => {
	let storageCar = {};
	let storageOwner = {};
	let storageAccessories = [];
	let storagePrice;
	storageCar.id = window.localStorage.getItem('carId');
	storageCar.brand = window.localStorage.getItem('carBrand');
	storageCar.model = window.localStorage.getItem('carModel');
	storageCar.price = window.localStorage.getItem('carPrice');
	storageCar.year = window.localStorage.getItem('carYear');
	storageCar.odometer = window.localStorage.getItem('carOdometer');
	storageCar.power = window.localStorage.getItem('carPower');
	storageCar.picture = window.localStorage.getItem('carPicture');

	for (i = 1; i <= 5; i++) {
		let accessory = {};
		accessory.id = i;
		accessory.name = window.localStorage.getItem(`accessory${i}Name`);
		accessory.price = window.localStorage.getItem(`accessory${i}Price`);
		storageAccessories.push(accessory);
	}

	storageCar.accessories = storageAccessories;

	storageOwner.name = window.localStorage.getItem('ownerName');
	storageOwner.financing = window.localStorage.getItem('ownerFinancing');
	storageOwner.delivery = window.localStorage.getItem('ownerData');

	storagePrice = window.localStorage.getItem('finalPrice');

	return [storageCar, storageOwner, storagePrice];
}

// Filling fields after refreshing
const fillForm = (storageCarData, storageOwnerData, storagePriceData) => {
	document.getElementById("chosen-car-image").src = storageCarData.picture;
	document.getElementById("chosen-car-image").alt = `${storageCarData.brand} / ${storageCarData.model}`;
	document.getElementById("chosen-car-item").innerText = `${storageCarData.brand} / ${storageCarData.model}`;
	document.getElementById("chosen-car-year").innerText = `${storageCarData.year} rok`;
	document.getElementById("chosen-car-odometer").innerText = `${storageCarData.odometer} rok`;
	document.getElementById("chosen-car-power").innerText = `${storageCarData.power} KM`;
	document.getElementById("chosen-car-price").innerText = `${storagePriceData} zł`;

	document.getElementById("name").value = `${storageOwnerData.name}`

	if (storageOwnerData.financing === "gotówka") {
		document.getElementById("money").checked = true;
		document.getElementById("leasing").checked = false;
	} else {
		document.getElementById("money").checked = false;
		document.getElementById("leasing").checked = true;
	}

	document.getElementById("delivery").value = storageOwnerData.delivery;
	document.getElementById("delivery").min = storageOwnerData.delivery;
	document.getElementById("delivery").max = storageOwnerData.delivery;
}


const getSelectedOptions = (car) => {
	let selectedOptionsList = Array.from(document.getElementById("feature-added").options).map(e => e.value);
	let numSelectedOptions = [];
	for (i = 0; i < selectedOptionsList.length; i++) {
		numSelectedOptions.push(parseInt(selectedOptionsList[i]));
		window.localStorage.setItem(`accessory${numSelectedOptions[i]}Name`, JSON.stringify(car.accessories[numSelectedOptions[i] - 1].name));
		window.localStorage.setItem(`accessory${numSelectedOptions[i]}Price`, JSON.stringify(car.accessories[numSelectedOptions[i] - 1].price));
	}
}