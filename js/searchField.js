// Getting value of field
const getValue = (field) => (field).value;

// File brands list
const getBrands = (carsList) => {
	let arrayOfBrands = [];
	arrayOfBrands[0] = " ";
	carsList.forEach(car => arrayOfBrands.push(car.brand));
	return [... new Set(arrayOfBrands.sort())];
};

const brands = getBrands(CARS);
brandField.innerHTML = brands.map(brand => `<option value=${brand}>${brand}</option>`).join('');

const getModels = (carsList) => {
	let arrayOfModels = [];
	arrayOfModels[0] = " ";
	carsList.forEach(car => arrayOfModels.push(car.model));
	return [...new Set(arrayOfModels.sort())];
};

// File year list
const fillYearList = () => {
	const end = 1999;
	const start = new Date().getFullYear();
	let arrayOfYears = [];
	arrayOfYears[0] = " ";
	arrayOfYears[1] = start;
	for (let i = 1; i <= start - end-1; i++) {
		arrayOfYears.push(start - i);
	};
	arrayOfYears[start - end] = `starsze od ${end}`
	return arrayOfYears;
};

years = fillYearList();
yearField.innerHTML = years.map(year => `<option value=${year}>${year}</option>`).join('');

// Searching cars after chosed year
const filterByYear = (searchYear) => {
	if (!searchYear) {
		return car => true;
	}
	if (searchYear === "starsze") {
		return car => car.year < 1999;
	} else {
		return car => car.year >= searchYear;
	}
};

// File price list
const fillPriceList = () => {
	const end = 70000;
	const start = 5000;
	const step = 5000;
	const arrayLength = Math.floor(((end - start) / step));
	const range = [...Array(arrayLength).keys()].map(x => (x * step) + start);

	range[end - start] = `droższe niż ${end}`;

	return range;
}

price = fillPriceList();
priceField.innerHTML = price.map(price => `<option value=${price}>${price}</option>`).join('');

const filterByPrice = (searchPrice) => {
	if (!searchPrice) {
		return car => true;
	}
	if (searchPrice === "droższe") {
		return car => car.price > 70000;
	} else {
		return car => car.price < searchPrice;
	}
};

// Getting value of searched brand
brandField.addEventListener("change", () => {
	const searchedBrand = getValue(brandField);
	if (searchedBrand === "") {
		window.localStorage.removeItem("searchBrand");
		window.localStorage.removeItem("searchModel");
	} else {
		window.localStorage.setItem("searchBrand", JSON.stringify(searchedBrand));
	}
	carsBrand = getCarsOfSearchedBrand(CARS, searchedBrand);
	const models = getModels(carsBrand);
	modelField.innerHTML = models.map(model => `<option value=${model}>${model}</option>`).join('');

});

// Getting value of searched model
modelField.addEventListener("change", () => {
	let searchedModel = getValue(modelField);
	if (searchedModel === "") {
		window.localStorage.removeItem("searchModel");
	} else {
		window.localStorage.setItem("searchModel", JSON.stringify(searchedModel));
	}
});

// Getting value of searched year
yearField.addEventListener("change", () => {
	let searchedYear = getValue(yearField);
	if (searchedYear === "") {
		window.localStorage.removeItem("searchYear");
	} else {
		window.localStorage.setItem("searchYear", JSON.stringify(searchedYear));
	}
});

// Getting value of searched price
priceField.addEventListener("change", () => {
	let searchedPrice = getValue(priceField);
	if (searchedPrice === "") {
		window.localStorage.removeItem("searchPrice");
	} else {
		window.localStorage.setItem("searchPrice", JSON.stringify(searchedPrice));
	}
});

const getCarsToDisplay = (brandFilter, modelFilter, yearFilter, priceFilter) => {
	return CARS
		.filter(brandFilter)
		.filter(modelFilter)
		.filter(yearFilter)
		.filter(priceFilter)
};

// Search button
searchButton.addEventListener("click", () => {
	let searchBrand = JSON.parse(window.localStorage.getItem("searchBrand"));
	let searchModel = JSON.parse(window.localStorage.getItem("searchModel"));
	let searchYear = JSON.parse(window.localStorage.getItem("searchYear"));
	let searchPrice = JSON.parse(window.localStorage.getItem("searchPrice"));

	carListDiv.innerHTML = "";

	const carsToDisplay = getCarsToDisplay(
		car => !searchBrand || car.brand === searchBrand,
		car => !searchModel || car.model === searchModel,
		filterByYear(searchYear),
		filterByPrice(searchPrice)
	);

	if (carsToDisplay.length === 0) {
		alert("Żaden z samochodów w bazie nie spełnia podanych kryteriów")
	} else {
		fillCarList(carsToDisplay);
		showCarList();
	}
});