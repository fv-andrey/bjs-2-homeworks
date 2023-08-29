"use strict"

function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i of arr) {
		if (min > i) {
			min = i;
		}
		if (max < i) {
			max = i;
		}
		sum += i;
	}
	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i of arr) {
		sum += i;
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = arr[0];
	let max = arr[0];
	for (let i of arr) {
		if (min > i) {
			min = i;
		}
		if (max < i) {
			max = i;
		}
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i of arr) {
		if (i % 2 === 0) {
			sumEvenElement += i;
		} else {
			sumOddElement += i;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i of arr) {
		if (i % 2 === 0) {
			sumEvenElement += i;
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let resultFunc = func(...arrOfArr[i]);
		if (resultFunc > maxWorkerResult) {
			maxWorkerResult = resultFunc;
		}
	}
	return maxWorkerResult;
}