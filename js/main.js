// var i = 0;
// while (i < 5) {
// 	console.log(i);
// 	i++;
// }

// var i = 10;
// while (i > 5) {
// 	console.log(i);
// 	i--;
// }

// var i = 0;
// do {
// 	console.log(i);
// 	i++;
// }while (i < 5); // выполнится хотябы один раз

// for (var i = 0; i < 10; i++) {
// 	console.log (i);
// }

// for (var i = false, f = 10; i == false; (f += 1, f > 20 ? i = true : i = false)) {
// 	console.log(f);
// }

// var i = 0;
// for (; i < 10; i++) {
// 	console.log(i);
// }

// var 1 = 10;
// for (; i > 5;) {
// 	console.log(i);
// 	i--;
// }
// for (; ;) {
// 	// Бесконечный цикл
// }

// var i = 0;
// while(true) {
// 	console.log(i);
// 	i++;
// 	if(i > 10) {
// 		break;
// 	}
// }

// var i = 0;
// do {
// 	console.log(i);
// 	i++;
// 	if(i > 10) {
// 		break;
// 	}
// } while(true); 

// for (var i = 0; i < 10; i++) {
// 	if (!(i % 2)) {
// 		continue;
// 	}
// 	console.log(i);
// }
// continue & break нельзя использовать с операторами

// function fnName(x, y, z) {
// 	console.log (x + y + z);
// }
// fnName(1, 2, 3);
// fnName(5, 4, 9);

// var matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// function findFiveInMatrix(matrix) {
// 	outer: for (var i = 0; i < matrix.length; i++) {
// 		console.log("outer iteaftion", i, "value = ", matrix[i]);
// 		inner: for (var j = 0; j < matrix.length; j++) {
// 			console.log("inner iteration =", j, "value =", matrix[i][j]);
// 			if (matrix[i][j] == 5) {
// 				break outer;
// 			}
// 		}
// 	}
// };
// findFiveInMatrix(matrix);


// var obj = {
// 	"key1": "value1",
// 	"key2": "value2",
// 	"key3": "value3"
// }

// var array = ["arrValue1", "arrValue2", "arrValue3"];
// array.myPronerty = "test";
// for (var key in obj) {
// 	console.log(obj[key]);
// }

// for (var index in array) {
// 	console.log(array[index]);
// }

// array.forEach(function(element, index, iterableArray) {
// 	console.log(element, index, iterableArray);
// });

// var array = [];

// array[10] = null;

// console.log(array);

// console.log(array.length);

// var array = [];

// var object = {};

// console.log(typeof array);
// console.log(typeof object);
// console.log(Array.isArray(array));
// console.log(Array.isArray(object));
var arr = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == false ) {
		newArr.push(arr[i]);
	}
}
console.log (newArr);	