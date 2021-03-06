const fillCarList = (() => {
  // Preparing div with one car data
  const carModal = (car) => {
    const markup = /*html*/ `
      <div class="row car-box" id=${car.id} onclick = "displayFormWithCar(this)">
        <div class="col-lg-6 car-image-div">
        <img src="${car.picture}" alt="${car.brand} ${car.model}" class="car-image"/>
        </div>
        <div class="col-lg-6">
          <div class="car-item">${car.brand}/${car.model}</div>
          <ul class="car-feature-list">
            <li class="car-feature car-feature-year">
              <img src="./assets/calendar.png" alt="Rok"/>
              <p class="year">${car.year} rok</p>
            </li>
            <li class="car-feature car-feature-speedometer">
              <img src="./assets/speedometer.png" alt="Przebieg"/>
              <p class="odometer">${car.odometer} km</p>
            </li>
            <li class="car-feature car-feature-power">
              <img src="./assets/energy.png" alt="Moc"/>
              <p class="power">${car.power} KM</p>
            </li>
          </ul>
          <div class="car-price">Cena:</div>
          <p class="price2">${car.price} zł</p>
        </div>
      </div>
  `;

    // Creating main div for car data
    const div = document.createElement("div");
    div.className = "col-md-6";
    div.innerHTML = markup;

    return div;
  };

  // Changing main div for pairs of divs
  const toPairs = (result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  };

  // Creating and filling car-list
  const fillCarList = (cars) => {
    cars
      .map(carModal)
      .reduce(toPairs, [])
      .map((carPair) => {
        const div = document.createElement("div");
        div.className = "row";
        carPair.forEach((car) => div.appendChild(car));
        return div;
      })
      .forEach((div) => carListSection.appendChild(div));
  };

  window.onload = () => {
    window.localStorage.removeItem("searchBrand");
    window.localStorage.removeItem("searchModel");
    window.localStorage.removeItem("searchYear");
    window.localStorage.setItem("searchPrice", JSON.stringify(String(getMaxPrice(CARS)+1)));
    const dataFromLocalStorage = getDataFromLocalStorage();
    storageCar = dataFromLocalStorage.car;
    carAccessories = dataFromLocalStorage.car.accessories;
    possibleAccessories = dataFromLocalStorage.possibleAccessories;
    chosenAccessories = dataFromLocalStorage.chosenAccessories;

    storageOwner = dataFromLocalStorage.owner || "";

    storageFinancing = dataFromLocalStorage.financing;
    storageDelivery = dataFromLocalStorage.delivery;
    storageFinalPrice = dataFromLocalStorage.storageFinalPrice;
    if (storageCar.id !== 0) {
      removeOrAddDisabledClass(formLink);
      fillForm(storageCar, possibleAccessories, chosenAccessories, storageOwner, storageFinancing, storageFinalPrice);
    } else {
      window.localStorage.setItem("financing", "gotówka");
    }
    window.localStorage.setItem("delivery", deliveryData());
  };

  return fillCarList;
})();