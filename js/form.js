const displayFormWithCar = (carItem) => {

  const carChosen = CARS[carItem.id - 1];
  storageCar = carChosen;

  // Car data
  let carAccessories = carChosen.accessories;

  let carDescription = carDescriptionFun(carChosen);

  // Fill choosen car data
  carChosenImage.src = carDescription.carImageSource;
  carChosenImage.alt = carDescription.carBrandModelDescription;
  carItemChosen.innerText = carDescription.carBrandModelDescription;
  carYearChosen.innerText = carDescription.carYearDescription;
  carOdometerChosen.innerText = carDescription.carOdometerDescription;
  carPowerChosen.innerText = carDescription.carPowerDescription;
  carPriceChosen.innerText = carDescription.carPriceDescription;

  // Saving car data to localStorage
  saveCarDataToLocalStorage(carChosen);
  window.localStorage.setItem("carFinalPrice", JSON.stringify(gettingAcctualPrice(carPriceChosen)));

  addAccessoryLists(carAccessories, [], fieldForFeaturesForAdd, fieldForFeaturesAdded);

  // Acctive form in navigation and form field;
  showFormSection();
};