"use strict"

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;
	let result = [];

	if (discriminant === 0) {
		result.push(-b / (2 * a));
	} else if (discriminant > 0) {
		result.push((-b + Math.sqrt(discriminant)) / (2 * a));
		result.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}
	return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthlyPersent = percent / 100 / 12;
	let sumCredit = amount - contribution;

	let monthlyPayment = sumCredit * (monthlyPersent + (monthlyPersent / (((1 + monthlyPersent) ** countMonths) - 1)));

	return Number((monthlyPayment * countMonths).toFixed(2));
}