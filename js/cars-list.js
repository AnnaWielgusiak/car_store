console.log(CARS);

document.addEventListener("DOMContentLoaded", function ($event) {



    let carData = document.getElementsByClassName("car-info");
    carData[0].innerText = `${CARS[0].brand} ${CARS[0].model}`;
    let carFeatures = document.getElementsByClassName("car-features");
    carFeatures[0].innerText = `${CARS[0].year} ${CARS[0].odometer} ${CARS[0].power}`;
    let carPrice = document.getElementsByClassName("car-price");
    carPrice[0].innerText = `${CARS[0].price}`;
    let carImage = document.getElementsByClassName("car-image");
    let image = new Image();
    image.src = CARS[0].picture;
    image.alt = `${CARS[0].brand} ${CARS[0].model}`;
    image.classList.add("car-image");
    carImage[0].appendChild(image);

    let carData = document.getElementsByClassName("car-info");
    carData[0].innerText = `${CARS[0].brand} ${CARS[0].model}`;
    let carFeatures = document.getElementsByClassName("car-features");
    carFeatures[0].innerText = `${CARS[0].year} ${CARS[0].odometer} ${CARS[0].power}`;
    let carPrice = document.getElementsByClassName("car-price");
    carPrice[0].innerText = `${CARS[0].price}`;
    let carImage = document.getElementsByClassName("car-image");
    let image = new Image();
    image.src = CARS[0].picture;
    image.alt = `${CARS[0].brand} ${CARS[0].model}`;
    image.classList.add("car-image");
    carImage[0].appendChild(image);
   });