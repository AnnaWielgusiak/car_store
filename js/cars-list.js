(() => {
  // Preparing div widt one car data
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

  // Changing main div for pairs of dives
  const toPairs = (result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  };
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
      .forEach((div) => document.getElementById("car-list").appendChild(div));
  };

  const showCarList = () => {
    show(document.getElementById("car-list"));
    hide(document.getElementById('form-id'));
    hide(document.getElementById('summary'));
  };

  const emptySelectAccesorriesList = (selectToEmpty) => {
    for (i = 0; i < selectToEmpty.options.length - 1; i++) {
      selectToEmpty.remove(i);
    }
  }

  window.onload = () => fillCarList(CARS);
  document.getElementById("buy-car").addEventListener("click", () => {
    showCarList();
    let selectCarAccessoriesToEmpty = document.getElementById("features-for-add")
    let selectAccessoriesToEmpty = document.getElementById("feature-added")
    if (selectCarAccessoriesToEmpty !== null) {
      emptySelectAccesorriesList(selectCarAccessoriesToEmpty);
    }
    if (selectAccessoriesToEmpty !== null) {
      emptySelectAccesorriesList(selectAccessoriesToEmpty);
    }
  });
})();