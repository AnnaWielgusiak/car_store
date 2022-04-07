const displayFormWithCar = (btn) => {
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

  SelectFieldForFeaturesForAdd.innerHTML = posibleFeaturesForAdd.map(c => `<option class="faeture-for-add" id=${c.id} value=${c.id}> ${c.name}: ${c.price} zł </option>`).join('');

  hide(document.getElementById('car-list'));
  show(document.getElementById('form-id'));
  show(document.getElementById('form'));

  document.getElementById("add").addEventListener("click", () => addRemove(posibleFeaturesForAdd));
  document.getElementById("delete").addEventListener("click", () => removeAdd(posibleFeaturesForAdd));
}

const addRemove = (posibleFeaturesForAdd) => {
  let carPriceChosenWithAccesorriesToRemove = document.getElementById("chosen-car-price");
  let pricesArrayToAdd = [];
  pricesArrayToAdd[0] = Number(carPriceChosenWithAccesorriesToRemove.textContent.slice(0, -3));
  let removedFeature = document.getElementById("faetures-for-add");
  let addedFeature = document.getElementById("feature-added");
  let option = document.createElement("option");
  option.value = removedFeature.value;
  option.innerText = `${posibleFeaturesForAdd[removedFeature.value-1].name}: ${posibleFeaturesForAdd[removedFeature.value-1].price} zł`
  addedFeature.add(option);
  pricesArrayToAdd.push(posibleFeaturesForAdd[removedFeature.value - 1].price);
  let totalSum = pricesArrayToAdd.reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
  let carPriceChosenWithAccesorries = document.getElementById("chosen-car-price");
  carPriceChosenWithAccesorries.innerText = totalSum + " zł";
  removedFeature.remove(removedFeature.selectedIndex);
}

const removeAdd = (posibleFeaturesForAdd) => {
  let carPriceChosenWithAccesorriesToRemove = document.getElementById("chosen-car-price");
  let pricesForCut = [];
  pricesForCut[0] = Number(carPriceChosenWithAccesorriesToRemove.textContent.slice(0, -3));
  let addedFeature = document.getElementById("faetures-for-add");
  let removedFeature = document.getElementById("feature-added");
  let option = document.createElement("option");
  option.value = removedFeature.value;
  option.innerText = `${posibleFeaturesForAdd[removedFeature.value-1].name}: ${posibleFeaturesForAdd[removedFeature.value-1].price} zł`
  addedFeature.add(option);
  pricesForCut.push(posibleFeaturesForAdd[removedFeature.value - 1].price);
  let totalSum2 = pricesForCut.reduce(function (previousValue, currentValue, index, array) {
    return previousValue - currentValue;
  });
  let carPriceChosenWithoutAccesorries = document.getElementById("chosen-car-price");
  carPriceChosenWithoutAccesorries.innerText = totalSum2 + " zł";
  removedFeature.remove(removedFeature.selectedIndex);
}