const displaySummary = (car, owner, finalPrice) => {
 	// Acctive summary button
 	document.getElementById("summary-in-nav").classList.remove('disabled');

	hide(document.getElementById('car-list'));
	hide(document.getElementById('form-id'));
	show(document.getElementById('summary'));
	show(document.getElementById('summary-in-nav'));

	document.getElementById("summary-in-nav").addEventListener("click", () => {
		hide(document.getElementById('form-id'));
		hide(document.getElementById('car-list'));
		hide(document.getElementById('alert'));
		show(document.getElementById('summary'));
	});

	const finalCarChosenImage = document.getElementById("final-chosen-car-image");
	finalCarChosenImage.src = `${car.picture}`;
	finalCarChosenImage.alt = `${car.brand} / ${car.model}`;
	finalCarChosenImage.className = "chosen-car-image";

	const finalChosenCarData = `${car.brand} / ${car.model}`;
	document.getElementById("final-chosen-car-data").innerText = finalChosenCarData;

	const finalChosenFinancing = owner.financing;
	document.getElementById("final-chosen-financing").innerText = finalChosenFinancing

	const finalDelveryData = owner.delivery;
	document.getElementById("final-delivery-data").innerText = finalDelveryData;

	const finalPriceWithPLN = `${finalPrice} zł`
	document.getElementById("final-price").innerText = finalPriceWithPLN;
}
