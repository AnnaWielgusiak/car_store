const showCarList = () => {
	show(carouselSection);
	show(carListSection);
	carListSection.scrollIntoView();
	hide(formSection);
	hide(alertSection);
	hide(summarySection);
};

const showFormSection = () => {
	hide(carouselSection);
	hide(carListSection);
	show(formSection);
	formSection.scrollIntoView();
	hide(alertSection);
	hide(summarySection);
	removeOrAddDisabledClass(formLink);
};

const showAlertSection = () => {
	hide(carouselSection);
	hide(carListSection);
	show(formSection);
	show(alertSection);
	alertSection.scrollIntoView();
	hide(summarySection);
};

const showSummarySection = () => {
	hide(carouselSection);
	hide(carListSection);
	hide(formSection);
	hide(alertSection);
	hide(carouselSection);
	show(summarySection);
	summarySection.scrollIntoView();
	removeOrAddDisabledClass(summaryLink);
};

const removeOrAddDisabledClass = (navigationLink) => {
	if (navigationLink.classList.contains("disabled") === true) {
		navigationLink.classList.remove("disabled");
	}
};

// Action on the press buy-car link
buyCarLink.addEventListener("click", () => {
	carListSection.innerHTML = "";
	fillCarList(CARS);
	showCarList();
});

// Action on the press form-link
formLink.addEventListener("click", () => showFormSection());

// Action on the press summary-link
summaryLink.addEventListener("click", () => showSummarySection());