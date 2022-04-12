// Navigation links
const buyCarLink = document.getElementById("buy-car");
const formLink = document.getElementById("form");
const summaryLink = document.getElementById("summary-in-nav");

// Main dives
const carListDiv = document.getElementById("car-list");
const formDiv = document.getElementById("form-id");
const alertDiv = document.getElementById("alert");
const summaryDiv = document.getElementById("summary");

// Fields for fill in form
// coresponding to car
const carChosenImage = document.getElementById("chosen-car-image");
const carItemChosen = document.getElementById("chosen-car-item");
const carYearChosen = document.getElementById("chosen-car-year");
const carOdometerChosen = document.getElementById("chosen-car-odometer");
const carPowerChosen = document.getElementById("chosen-car-power");
let carPriceChosen = document.getElementById("chosen-car-price");
let fieldForFeaturesForAdd = document.getElementById("faetures-for-add");
let fieldForFeaturesAdded = document.getElementById("feature-added");
// coresponding to owner
let nameField = document.getElementById("name");

// coresponding to finance
const checkedMoney = document.getElementById("money");
const checkedLeasing = document.getElementById("leasing");

// coresponding to delivery
const deliveryField = document.getElementById("delivery");

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
}

// Buttons
const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");
const buyButton = document.getElementById("buy");
const backButton = document.getElementById("back");

// Field to fill in summary
const finalCarChosenImage = document.getElementById("final-chosen-car-image");
const finalCarChosenData = document.getElementById("final-chosen-car-data");
const finalChosenFinancing = document.getElementById("final-chosen-financing");
const finalDeliveryData = document.getElementById("final-delivery-data");
const finalCarPrice = document.getElementById("final-price");
