const displayFormWithCar = (btn) => {

  // Acctive form button
  document.getElementById("form").classList.remove('disabled');

  // Fill choosen car data
  document.getElementById("feature-added").innerHTML = "";
  const car = CARS[btn.id - 1];
  const carChosenImage = document.getElementById("chosen-car-image");
  carChosenImage.src = `${car.picture}`;
  carChosenImage.alt = `${car.brand} / ${car.model}`;

  let carItemChosen = document.getElementById("chosen-car-item");
  carItemChosen.innerText = `${car.brand} / ${car.model}`;

  let carYearChosen = document.getElementById("chosen-car-year");
  carYearChosen.innerText = `${car.year} rok`;

  let carOdometerChosen = document.getElementById("chosen-car-odometer");
  carOdometerChosen.innerText = `${car.odometer} km`;

  let carPowerChosen = document.getElementById("chosen-car-power");
  carPowerChosen.innerText = `${car.power} KM`;

  let carPriceChosen = document.getElementById("chosen-car-price");
  carPriceChosen.innerText = `${car.price} zł`;

  const posibleFeaturesForAdd = car.accessories;
  const SelectFieldForFeaturesForAdd = document.getElementById("faetures-for-add");

  SelectFieldForFeaturesForAdd.innerHTML = posibleFeaturesForAdd.map(c => `<option value=${c.id}> ${c.name}: ${c.price} zł </option>`).join('');

  // Fide and show dives with car list, form
  hide(document.getElementById('car-list'));
  show(document.getElementById('form-id'));

  document.getElementById("form").addEventListener("click", () => {
    show(document.getElementById('form-id'));
    hide(document.getElementById('car-list'));
    hide(document.getElementById('summary'));
  });

  // Adding and removing choosen car accesories
  document.getElementById("add").addEventListener("click", () => addRemove(posibleFeaturesForAdd));
  document.getElementById("delete").addEventListener("click", () => removeAdd(posibleFeaturesForAdd));

  //Filling delivery data
  document.getElementById("delivery").value = deliveryData();
  document.getElementById("delivery").min = deliveryData();
  document.getElementById("delivery").max = deliveryData();

  //Changing financing
  let checkedMoney = document.getElementById("money")
  let checkedLeasing = document.getElementById("leasing")
  checkedMoney.addEventListener("click", () => changeCheck(checkedMoney, checkedLeasing));
  checkedLeasing.addEventListener("click", () => changeCheck(checkedLeasing, checkedMoney));

  // Getting owner data and display summary
  document.getElementById("buy").addEventListener("click", () => {
    let finalPriceToGive = getingAcctualPrice()[0];
    if (getAndCheckData() === null) {
      show(document.getElementById('form-id'));
      hide(document.getElementById('summary'));
    } else {
      window.localStorage.clear();
      displaySummary(car, getAndCheckData(), finalPriceToGive);
    }
  });

  //Back to the car list
  document.getElementById("back").addEventListener("click", () => {
    hide(document.getElementById('form-id'));
    show(document.getElementById('car-list'));
    hide(document.getElementById('alert'));
    hide(document.getElementById('summary'));
  });

  //Save data to localStorage
  document.getElementById("save").addEventListener("click", () => {
    let finalPriceToGive = getingAcctualPrice()[0];
    if (getAndCheckData() === null) {
      show(document.getElementById('form-id'));
      hide(document.getElementById('summary'));
    } else {
      window.localStorage.clear();
      saveToLocalStorage(car, getAndCheckData(), finalPriceToGive);
    }
  })

  //Clean data from localStorage
  document.getElementById("clean").addEventListener("click", () => {
    window.localStorage.clear();

    const posibleFeaturesForAdd = car.accessories;
    const SelectFieldForFeaturesForAdd = document.getElementById("faetures-for-add");
    SelectFieldForFeaturesForAdd.innerHTML = posibleFeaturesForAdd.map(c => `<option value=${c.id}> ${c.name}: ${c.price} zł </option>`).join('');

    document.getElementById("feature-added").innerHTML = "";
    document.getElementById("chosen-car-price").innerText = `${car.price} zł`;
    document.getElementById("name").value = "";
    let checkedMoney = document.getElementById("money");
    let checkedLeasing = document.getElementById("leasing");
    checkedMoney.checked = true;
    changeCheck(checkedMoney, checkedLeasing);
  })
}

const getingAcctualPrice = () => {
  let carPriceChosenWithAccesorriesToRemove = document.getElementById("chosen-car-price");
  let pricesArray = [];
  pricesArray[0] = Number(carPriceChosenWithAccesorriesToRemove.textContent.slice(0, -3));
  return pricesArray;
}

const createOption = (posibleFeaturesForAdd, removedFeature) => {
  let option = document.createElement("option");
  option.value = removedFeature.value;

  option.innerText = `${posibleFeaturesForAdd[removedFeature.value-1].name}: ${posibleFeaturesForAdd[removedFeature.value-1].price} zł`
  return option
}

const addRemove = (posibleFeaturesForAdd) => {
  let pricesArrayToAdd = getingAcctualPrice();
  let removedFeature = document.getElementById("faetures-for-add");
  let addedFeature = document.getElementById("feature-added");

  pricesArrayToAdd.push(posibleFeaturesForAdd[removedFeature.value - 1].price);
  addedFeature.add(createOption(posibleFeaturesForAdd, removedFeature));
  removedFeature.remove(removedFeature.selectedIndex);

  let totalSumAfterAdd = pricesArrayToAdd.reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });

  let carPriceChosenAccesorries = document.getElementById("chosen-car-price");
  carPriceChosenAccesorries.innerText = totalSumAfterAdd + " zł";

}

const removeAdd = (posibleFeaturesForAdd) => {
  let pricesForCut = getingAcctualPrice();
  let addedFeature = document.getElementById("faetures-for-add");
  let removedFeature = document.getElementById("feature-added");

  pricesForCut.push(posibleFeaturesForAdd[removedFeature.value - 1].price);

  addedFeature.add(createOption(posibleFeaturesForAdd, removedFeature));
  removedFeature.remove(removedFeature.selectedIndex);

  let totalSumAfterDelete = pricesForCut.reduce(function (previousValue, currentValue, index, array) {
    return previousValue - currentValue;
  });

  let carPriceChosenAccesorries = document.getElementById("chosen-car-price");
  carPriceChosenAccesorries.innerText = totalSumAfterDelete + " zł";

}

const changeValueToString = (value) => {
  let valueString;
  if (value < 10) {
    valueString = String(`0${value}`)
  } else {
    valueString = String(value);
  }
  return valueString
}

const deliveryData = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate() + 14;

  let yearString = String(year);
  let monthString = changeValueToString(month);
  let dayString = changeValueToString(day);

  let deliveryDay = `${yearString}-${monthString}-${dayString}`;
  return deliveryDay
}

const printUnicodNumbersSignsToDel = () => {
  let arrayOfSigns = [];
  for (let i = 91; i < 97; i++) {
    const unicodeNumberSignsToDel = String.fromCharCode(i);
    arrayOfSigns.push(unicodeNumberSignsToDel);
  }
  return arrayOfSigns;
}

const letters = () => {
  const arrayOfPolishLetters = [" ", "Ą", "ą", "Ć", "ć", "Ę", "ę", "Ł", "ł", "Ń", "ń", "Ó", "ó", "Ś", "ś", "Ż", "ż", "Ź", "ź"];
  let arrayOfLetters = arrayOfPolishLetters;
  signsToDell = printUnicodNumbersSignsToDel();
  for (let i = 65; i < 123; i++) {
    const letter = String.fromCharCode(i);
    if (signsToDell.indexOf(letter) < 0) {
      arrayOfLetters.push(letter);
    }
  }
  return arrayOfLetters;
}

const checkNameSigns = (gettingName) => {
  let signs = letters();

  // Check of in name is inncorect - sign
  let positionOfSign = [];
  for (i = 0; i < gettingName.length; i++) {
    if (signs.includes(gettingName[i]) === false) {
      positionOfSign.push(i);
    }
  }
  return positionOfSign;
}

const checkNameSpaces = (gettingName) => {
  let positionOfSpaces = [];
  for (i = 0; i < gettingName.length; i++) {
    if (gettingName[i] === " ") {
      positionOfSpaces.push(i);
    }
  }
  return positionOfSpaces;
}

const checkName = (gettingName) => {
  let signsInName = checkNameSigns(gettingName);
  let spacesInName = checkNameSpaces(gettingName);
  if (signsInName.length > 0 || spacesInName.length !== 1) {
    return false;
  } else {
    return true;
  }

}

const changeCheck = (checkedMoney, checkedLeasing) => {
  if (checkedMoney.checked === true) {
    checkedLeasing.checked = false;
  } else {
    checkedLeasing.checked = true;
  }
}

const checkChoosinfFinancing = () => {
  let finance;
  if (document.getElementById("money").checked === true) {
    finance = "gotówka";
  } else if (document.getElementById("leasing").checked === true) {
    finance = "leasing";
  }
  return finance;
}

const getData = () => {
  let gettingData = {};
  let name = (document.getElementById("name").value).trim();
  gettingData.name = name;
  gettingData.financing = checkChoosinfFinancing();
  gettingData.delivery = deliveryData();
  return gettingData;
}

const getAndCheckData = () => {
  let ownerData = getData();
  let nameToCheck = ownerData.name;
  let printAlert = checkName(nameToCheck);
  let alertToShowHide = document.getElementById("alert");
  let dataOwnerForPrint;

  if (nameToCheck.length = 0 || printAlert === false) {
    show(alertToShowHide);
    alertToShowHide.scrollIntoView();
    dataOwnerForPrint = null;
  } else {
    hide(alertToShowHide);
    dataOwnerForPrint = ownerData;
  }
  return dataOwnerForPrint;
}