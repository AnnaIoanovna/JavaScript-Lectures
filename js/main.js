// function pow(x, y, z) {
// 	z = z || 1;
// 	y --;
// 	z *= x;
// 	return y > 1 ? (pow(x, y, z)) : z;
// }
//console.log(pow(2,3));

// function pow(x, y) {
// 	y --;
// 	x *= x;
// 	return y > 0 ? (pow(x, y)) : y;
// }
// console.log(pow(2, 3));

function toOneDimention (array, newArray) {
	newArray = newArray || [];
	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			toOneDimention(array[i], newArray);
		}
		else {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

var array1 = ["asd", "asdd", [1, 3,4, ["asd", null, {}], ["asd", {}]], [null]];

console.log(toOneDimention(array1));