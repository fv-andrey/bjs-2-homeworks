"use strict"

function compareArrays(arr1, arr2) {
	return ((arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]));
}

function getUsersNamesInAgeRange(users, gender) {
	if (gender === "мужской" || gender === "женский" && users.length > 0) {
		return users.filter(usersGender => usersGender.gender === gender)
			.map(usersAge => usersAge.age)
			.reduce((acc, age, index, arr) => {
				acc += age;
				if (index === arr.length - 1) {
					return acc / arr.length;
				}
				return acc;
			}, 0);
	}
	return 0;
}