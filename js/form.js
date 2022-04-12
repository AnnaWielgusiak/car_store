const displayFormWithCar = (carItem) => {

  const carChosen = CARS[carItem.id - 1];

  // Car data
  const carAccessories = carChosen.accessories;

  const carDescription = carDescriptionFun(carChosen);

  // Fill choosen car data
  carChosenImage.src = carDescription.carImageSource;
  carChosenImage.alt = carDescription.carBrandModelDescription;
  carItemChosen.innerText = carDescription.carBrandModelDescription;
  carYearChosen.innerText = carDescription.carYearDescription;
  carOdometerChosen.innerText = carDescription.carOdometerDescription;
  carPowerChosen.innerText = carDescription.carPowerDescription;
  carPriceChosen.innerText = carDescription.carPriceDescription;

  // Fill field with accessories
  let fieldFromRemoved;
  let fieldWhereAdd;

  const addAccessoryLists = (possibleAccessories, chosenAccessories, fieldForFeaturesForAdd, fieldForFeaturesAdded) => {
    fieldForFeaturesForAdd.innerHTML = "";
    fieldForFeaturesAdded.innerHTML = "";
    fieldForFeaturesForAdd.innerHTML = possibleAccessories.map(accessory => `<option value=${accessory.id}> ${accessory.name}: ${accessory.price} zł </option>`).join('');
    fieldForFeaturesAdded.innerHTML = chosenAccessories.map(accessory => `<option value=${accessory.id}> ${accessory.name}: ${accessory.price} zł </option>`).join('');
  }

  addAccessoryLists(carAccessories, [], fieldForFeaturesForAdd, fieldForFeaturesAdded);

  // Adding and removing accessories and acctualisation of final price
  const createAccessory = (carAccessories, chosenAccessoryId) => {
    const chosenAccessory = {};
    chosenAccessory.id = carAccessories[chosenAccessoryId].id;
    chosenAccessory.name = carAccessories[chosenAccessoryId].name;
    chosenAccessory.price = carAccessories[chosenAccessoryId].price;
    return chosenAccessory;
  };

  const createOption = (accessory) => {
    let option = document.createElement("option");
    option.value = accessory.id;
    option.innerText = `${accessory.name}: ${accessory.price} zł`;
    return option;
  };

  const addRemoveBeetwenList = (carAccessories, fieldFromRemoved, fieldWhereAdd, sign, carPriceChosen) => {
    let acctualPrice = gettingAcctualPrice(carPriceChosen);
    carPriceChosen = document.getElementById("chosen-car-price");
    const clickedAccessory = Number(fieldFromRemoved.options[fieldFromRemoved.selectedIndex].value)-1;
    const chosenAccessoryId = carAccessories[clickedAccessory].id;
    const descriptionOfAccessoryToAdd = createAccessory(carAccessories, chosenAccessoryId - 1);
    const addedOption = createOption(descriptionOfAccessoryToAdd);

    fieldWhereAdd.add(addedOption);
    fieldFromRemoved.remove(fieldFromRemoved.selectedIndex);

    let finalPrice;
    if (sign === "plus") {
      finalPrice = acctualPrice + descriptionOfAccessoryToAdd.price;
    } else if (sign === "minus") {
      finalPrice = acctualPrice - descriptionOfAccessoryToAdd.price;
    };

    carPriceChosen.innerText = `${finalPrice} zł`;
  };

  addButton.addEventListener("click", () => {
    fieldFromRemoved = fieldForFeaturesForAdd;
    fieldWhereAdd = fieldForFeaturesAdded;
    addRemoveBeetwenList(carAccessories, fieldFromRemoved, fieldWhereAdd, "plus", carPriceChosen);

  });

  deleteButton.addEventListener("click", () => {
    fieldWhereAdd = fieldForFeaturesForAdd;
    fieldFromRemoved = fieldForFeaturesAdded;

    addRemoveBeetwenList(carAccessories, fieldFromRemoved, fieldWhereAdd, "minus", carPriceChosen);
  });

  //Filling delivery data
  deliveryField.value = deliveryData();
  deliveryField.min = deliveryData();
  deliveryField.max = deliveryData();

  //Changing financing
  checkedMoney.addEventListener("click", () => changeCheck(checkedMoney, checkedLeasing));
  checkedLeasing.addEventListener("click", () => changeCheck(checkedLeasing, checkedMoney));

  // Acctive form in navigation and form field;
  showFormDiv();

  // Getting owner data and display summary
  buyButton.addEventListener("click", () => {
    let finalPriceToGive = gettingAcctualPrice(carPriceChosen);
    if (getAndCheckOwnerData() === null) {
      showAlertDiv();
      hide(summaryDiv);
    } else {
      window.localStorage.clear();
      displaySummary(carChosen, checkChoosinfFinancing(), deliveryData(), finalPriceToGive);
    }
  });

  //Back to the car list
  backButton.addEventListener("click", () => {
    showCarList();
  });

}