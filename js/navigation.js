const showCarList = () => {
	show(carListDiv);
	carListDiv.scrollIntoView();
	hide(formDiv);
	hide(alertDiv);
	hide(summaryDiv);
};

const showFormDiv = () => {
	hide(carListDiv);
	show(formDiv);
	formDiv.scrollIntoView();
	hide(alertDiv);
	hide(summaryDiv);
	removeOrAddDisabledClass(formLink);
};

const showAlertDiv = () => {
	hide(carListDiv);
	show(formDiv);
	show(alertDiv);
	hide(summaryDiv);
};

const showSummaryDiv = () => {
	hide(carListDiv);
	hide(formDiv);
	hide(alertDiv);
	show(summaryDiv);
	summaryDiv.scrollIntoView();
	removeOrAddDisabledClass(summaryLink);
};

const removeOrAddDisabledClass = (navigationLink) => {
	if (navigationLink.classList.contains("disabled") === true) {
		navigationLink.classList.remove("disabled");
	}
};

// Action on the press buy-car link
buyCarLink.addEventListener("click", () => {
	carListDiv.innerHTML = "";
	fillCarList(CARS);
	showCarList();
});

// Action on the press form-link
formLink.addEventListener("click", () => showFormDiv());

// Action on the press summary-link
summaryLink.addEventListener("click", () => showSummaryDiv());