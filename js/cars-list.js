console.log(CARS);

document.addEventListener("DOMContentLoaded", function ($event) {
  fillCarlist();
});

const fillCarlist = () => {
  let carImage = document.getElementsByClassName("car-image-div");
  let imgArray = new Array();
  let carItem = document.getElementsByClassName("car-item");
  let carYear = document.getElementsByClassName("year");
  let carOdometer = document.getElementsByClassName("odometer");
  let carPower = document.getElementsByClassName("power");
  let carPrice = document.getElementsByClassName("price2");


  for (let i=0; i < CARS.length; i++) {
    imgArray[i] = new Image();
    imgArray[i].src = CARS[i].picture;
    imgArray[i].alt = `${CARS[i].brand} ${CARS[i].model}`; 
    imgArray[i].classList.add("car-image");
    console.log(imgArray[i])
    carImage[i].appendChild(imgArray[i]);
    carItem[i].innerText = `${CARS[i].brand} / ${CARS[i].model}`;
    carYear[i].innerText = `${CARS[i].year} rok`
    carOdometer[i].innerText = `${CARS[i].odometer} km`;
    carPower[i].innerText = `${CARS[i].power} KM`;
    carPrice[i].innerText = `${CARS[i].price} zł`; 
  
  }

};
