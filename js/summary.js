const displaySummary = (finalCar, financing, delivery, finalPrice) => {

	// Fill summary fields
	finalCarDescription = carDescriptionFun(finalCar);
	finalCarChosenImage.src = finalCarDescription.carImageSource;
	finalCarChosenImage.alt = finalCarDescription.carBrandModelDescription;
	finalCarChosenImage.classList.add("chosen-car-image");
	finalCarChosenData.innerText = finalCarDescription.carBrandModelDescription;
	finalChosenFinancing.innerText = financing;
	finalDeliveryData.innerText = delivery;
	finalCarPrice.innerText = `${finalPrice} zł`;

	// Acctive summary button
	showSummaryDiv();
	window.localStorage.clear();
}
