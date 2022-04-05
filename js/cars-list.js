(() => {
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

    const div = document.createElement("div");
    div.className = "col-md-6";
    div.innerHTML = markup;

    return div;
  };

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
  };

  window.onload = () => fillCarList(CARS);
  document.getElementById("buy-car").addEventListener("click", showCarList);
})();