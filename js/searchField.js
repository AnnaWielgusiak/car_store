// Getting value of field
const getValue = (field) => (field).value;

// File brands list
const getBrandsFromArray = (carsList) => {
	let arrayOfBrand = [];
	arrayOfBrand[0] = " ";
	for (let i = 0; i < carsList.length; i++) {
		if (arrayOfBrand.includes(carsList[i].brand) === false) {
			arrayOfBrand.push(carsList[i].brand);
		};
	};
	return arrayOfBrand.sort();

};

const brands = getBrandsFromArray(CARS);
brandField.innerHTML = brands.map(brand => `<option value=${brand}>${brand}</option>`).join('');

// Searching cars after chosed brand
const getCarsOfSearchedType = (carsList, searchBrand) => carsList.filter(car => car.brand === searchBrand);

// File model list
const getModelsFromArray = (carsList) => {
	let arrayOfModels = [];
	arrayOfModels[0] = " ";
	for (let i = 0; i < carsList.length; i++) {
		if (arrayOfModels.includes(carsList[i].model) === false) {
			arrayOfModels.push(carsList[i].model);
		};
	};
	return arrayOfModels.sort();
};

// Searching cars after chosed model
const getCarsOfSearchedModel = (carsList, searchModel) => {
	let carsOfType = [];
	for (let i = 0; i < carsList.length; i++) {
		if (carsList[i].model === searchModel) {
			carsOfType.push(carsList[i]);
		};
	};
	return carsOfType;
};

// File year list
const fillYearList = () => {
	const end = 1999;
	const start = new Date().getFullYear();
	let arrayOfYears = [];
	arrayOfYears[0] = " ";
	arrayOfYears[1] = start;
	for (let i = 2; i <= start - end; i++) {
		arrayOfYears.push(start - i);
	}
	arrayOfYears[start - end] = `starsze od ${end}`
	return arrayOfYears;
}

years = fillYearList();
yearField.innerHTML = years.map(year => `<option value=${year}>${year}</option>`).join('');

// Searching cars after chosed year
const getCarsOfSearchedYear = (carsList, searchYear) => {
	let carsOfType = [];
	if (searchYear === "starsze") {
		for (let i = 0; i < carsList.length; i++) {
			if (carsList[i].year < 1999) {
				carsOfType.push(carsList[i]);
			};
		};
		// return carsList.filter(car => car.year < 1999);
	} else {
		for (let i = 0; i < carsList.length; i++) {
			if (carsList[i].year > searchYear) {
				carsOfType.push(carsList[i]);
			}
		}
		// return carsList.filter(car => car.year > searchYear);
	};
	return carsOfType;
};

// Getting value of searched brand
brandField.addEventListener("change", () => {
	let searchedBrand = getValue(brandField);
	window.localStorage.setItem("searchBrand", JSON.stringify(searchedBrand));
	carsBrand = getCarsOfSearchedType(CARS, searchedBrand);
	const models = getModelsFromArray(carsBrand);
	modelField.innerHTML = models.map(model => `<option value=${model}>${model}</option>`).join('');

});

// Getting value of searched model
modelField.addEventListener("change", () => {
	let searchedModel = getValue(modelField);
	window.localStorage.setItem("searchModel", JSON.stringify(searchedModel));
});

// Getting value of searched year
yearField.addEventListener("change", () => {
	let searchedYear = getValue(yearField);
	window.localStorage.setItem("searchYear", JSON.stringify(searchedYear));
});


// Search button
searchButton.addEventListener("click", () => {
	let searchBrand = JSON.parse(window.localStorage.getItem("searchBrand"));
	let searchModel = JSON.parse(window.localStorage.getItem("searchModel"));
	let searchYear = JSON.parse(window.localStorage.getItem("searchYear"));
	let carsBrand;
	let carsModel;
	let carsYear;
	carListDiv.innerHTML = "";
	if (searchBrand !== null && searchModel === null && searchYear === null) {
		carsBrand = getCarsOfSearchedType(CARS, searchBrand);
		fillCarList(carsBrand);
	} else if (searchBrand !== null && searchModel !== null && searchYear === null) {
		carsBrand = getCarsOfSearchedType(CARS, searchBrand);
		carsModel = getCarsOfSearchedModel(carsBrand, searchModel);
		fillCarList(carsModel);
	} else if (searchBrand !== null && searchModel === null && searchYear !== null) {
		carsBrand = getCarsOfSearchedType(CARS, searchBrand);
		carsYear = getCarsOfSearchedYear(carsBrand, searchYear);
	} else if (searchBrand === null && searchModel === null && searchYear !== null) {
		carsYear = getCarsOfSearchedYear(CARS, searchYear);
		fillCarList(carsYear);
	} else {
		fillCarList(CARS);
	};
	showCarList();
});