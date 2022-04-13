const showCarList = () => {
	show(carListDiv);
	hide(formDiv);
	hide(alertDiv);
	hide(summaryDiv);
};

const showFormDiv = () => {
	hide(carListDiv);
	show(formDiv);
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
	removeOrAddDisabledClass(summaryLink);
};

const removeOrAddDisabledClass = (navigationLink) => {
	if (navigationLink.classList.contains("disabled") === true) {
		navigationLink.classList.remove("disabled");
	};
};

// Action on the press buy-car link
buyCarLink.addEventListener("click", () => {
	showCarList();
});

// Action on the press form-link
formLink.addEventListener("click", () => {
	showFormDiv();
});

// Action on the press summary-link
summaryLink.addEventListener("click", () => {
	showSummaryDiv();
});