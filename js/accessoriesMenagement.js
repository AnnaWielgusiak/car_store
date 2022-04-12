const addRemove = (posibleFeaturesForAdd) => {
		let pricesArrayToAdd = getingAcctualPrice();
		let removedFeature = document.getElementById("faetures-for-add");
		let addedFeature = document.getElementById("feature-added");

		pricesArrayToAdd.push(posibleFeaturesForAdd[removedFeature.value - 1].price);
		let totalSum = pricesArrayToAdd.reduce(function (previousValue, currentValue, index, array) {

					addedFeature.add(createOption(posibleFeaturesForAdd, removedFeature));
					removedFeature.remove(removedFeature.selectedIndex);

					let totalSumAfterAdd = pricesArrayToAdd.reduce(function (previousValue, currentValue, index, array) {
						return previousValue + currentValue;
					});
					let carPriceChosenWithAccesorries = document.getElementById("chosen-car-price");
					carPriceChosenWithAccesorries.innerText = totalSum + " zł";
					removedFeature.remove(removedFeature.selectedIndex);

					let carPriceChosenAccesorries = document.getElementById("chosen-car-price");
					carPriceChosenAccesorries.innerText = totalSumAfterAdd + " zł";

				}

				const removeAdd = (posibleFeaturesForAdd) => {
						let carPriceChosenWithAccesorriesToRemove = document.getElementById("chosen-car-price");
						let pricesForCut = [];
						pricesForCut[0] = Number(carPriceChosenWithAccesorriesToRemove.textContent.slice(0, -3));
						let pricesForCut = getingAcctualPrice();
						let addedFeature = document.getElementById("faetures-for-add");
						let removedFeature = document.getElementById("feature-added");
						let option = document.createElement("option");
						option.value = removedFeature.value;
						option.innerText = `${posibleFeaturesForAdd[removedFeature.value-1].name}: ${posibleFeaturesForAdd[removedFeature.value-1].price} zł`
						addedFeature.add(option);

						pricesForCut.push(posibleFeaturesForAdd[removedFeature.value - 1].price);
						let totalSum2 = pricesForCut.reduce(function (previousValue, currentValue, index, array) {

									addedFeature.add(createOption(posibleFeaturesForAdd, removedFeature));
									removedFeature.remove(removedFeature.selectedIndex);

									let totalSumAfterDelete = pricesForCut.reduce(function (previousValue, currentValue, index, array) {
										return previousValue - currentValue;
									});
									let carPriceChosenWithoutAccesorries = document.getElementById("chosen-car-price");
									carPriceChosenWithoutAccesorries.innerText = totalSum2 + " zł";
									removedFeature.remove(removedFeature.selectedIndex);
