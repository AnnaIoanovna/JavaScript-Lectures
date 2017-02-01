// var obj = {
// 	test: "rest",
// 	name: ""
// };

// Object.defineProperty(obj, "test", {
// 	writable: false
// });
// console.log(obj);
// obj.test = "ololo";
// console.log(obj);

// Object.defineProperty(obj, "test", {
// 	writable: true
// });
// console.log(obj);
// obj.test = "ololo";
// console.log(obj);

// Object.defineProperty(obj, "test", {
// 	writable: false,
// 	configurable: false
// });
// console.log(obj);
// obj.test = "ololo";
// console.log(obj);

// Object.defineProperty(obj, "test", {
// 	writable: true,
// 	configurable: true
// });
// console.log(obj);
// obj.test = "ololo";
// console.log(obj);

// Object.defineProperty(obj, "test", {
// 	enumerable: false
// });
// console.log(Object.keys(obj));


// Object.defineProperty(obj, "name", {
// 	get: function () { return "Poshel nafig " + this.test; },
// 	set: function (value) { this.test = value + " mudak"}

// 	})
// console.log(obj.name);

// obj.name = "rommel";

// console.log(obj.name); 

// var array = [9, 678, 45736, 0, 789];
// console.log(array.push("asd"));//6
// console.log(array); //[9, 678, 45736, 0, 789, "asd"]
// console.log(array.pop()); //asd
// console.log(array);//[9, 678, 45736, 0, 789]
// console.log(array.unshift("asd"));//6
// console.log(array);//["asd",9, 678, 45736, 0, 789]
// console.log(array.shift());//"asd"
// console.log(array);

// var string = "ab, ds, hj";
// console.log(string.split(","));//["ab","ds","hj"]

// console.log(string.split(",", 2)); //["ab","ds"]
// console.log(string.split(""));  //["a", "b", ",", " ", "d", "s", ",", " ", "h", "j"] 

// var splitedString = string.split("");
// console.log(splitedString);
// var joinedString = splitedString.join("");
// console.log(joinedString);

// console.log([1,2,3,4,5].slice(1, 3)); //[2, 3]
// console.log([1,2,3,4,5].slice(1)); //[2, 3, 4, 5]
// console.log([1,2,3,4,5].slice(-3, -1)); //[3, 4]

// console.log([2,14,7,11,3].sort(function(a, b){
// 	if (a > b)
// 		return 1;
// 	if (b < a)
// 		return -1;
// }))
// console.log([2,14,7,11,3].sort(function(a, b){
// 	return a - b;
// }));

//console.log([1,2,3,4,5].reverse());

// var array = [1, 2];
// var newArray = array.concat([3, 4], 5);
// console.log(newArray);
// console.log(array);

 var array = [1, 2, 5, 8, 2, 10];
// console.log(array.indexOf(2));
// console.log(array.lastIndexOf(2));
// console.log(array.indexOf(7));
// console.log(array.lastIndexOf(7));
// console.log(!!~array.lastIndexOf(2));
// console.log(!!~array.lastIndexOf(7));
// ~ меняет число по формуле -(n + 1);

// array.forEach(function(elem){
// 	console.log(elem);
// })

var newArray = array.filter(function(elem) {
	return elem > 5;
});

// console.log(newArray);

newArray = array.map(function(elem) {
	return -elem;
});

// console.log(newArray);
// newArray[3] = -newArray[3];
// console.log(newArray.every(function (elem) {
// 	return elem > 0;
// }));

// console.log(newArray.some(function (elem) {
// 	return elem > 0;
// }));

// console.log(newArray.reduce(function(summ, elem) {
// 	return summ += elem;
// }, 0));

console.log(newArray.reduce(function(array, elem, index) {
	array.push(elem + " " + index);
	return array;
}, []));

console.log(newArray.reduceRight(function(array, elem, index) {
	array.push(elem + " " + index);
	return array;
}, []));