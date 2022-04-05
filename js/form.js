const displayFormWithCar = (car) => {
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

  hide(document.getElementById('car-list'));
  show(document.getElementById('formId'));
};