let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const arrOfTheBrands = [];
CARS.forEach((CAR) => {
    arrOfTheBrands.push(CAR.brand);
});

const countsTheSameBarnds = {};
arrOfTheBrands.forEach((x) => {
    countsTheSameBarnds[x] = (countsTheSameBarnds[x] || 0) + 1;
});

const amount = document.getElementsByClassName("anountOfItem");
for (const value of amount) {
    value.innerText += ` (${countsTheSameBarnds[value.innerText]})`;
}


