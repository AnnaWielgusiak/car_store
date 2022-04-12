const displaySummary = (car, financing, delivery, finalPrice) => {

	// Fill summary fields
	finalCarChosenImage.src = `${car.picture}`;
	finalCarChosenImage.alt = `${car.brand} / ${car.model}`;
	finalCarChosenImage.className = "chosen-car-image";

	const finalChosenCarData = `${car.brand} / ${car.model}`;
	finalCarChosenData.innerText = finalChosenCarData;

	finalChosenFinancing.innerText = financing;

	finalDeliveryData.innerText = delivery;

	const finalPriceWithPLN = `${finalPrice} zł`
	finalCarPrice.innerText = finalPriceWithPLN;

	// Acctive summary button
	showSummaryDiv();
}
