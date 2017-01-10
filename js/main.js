function functionName(argument1, argument2, argument3) {
	//some code
	return 10;
}
console.log(functionName());

var obj = {
	method: function () {return "method"},
	best: function () {}
}

function summ(num1, num2) {
	return num1 + num2;
}

console.log(summ(25, 13));

function filter(arr) {
 var newArr = [];
 for (var i = 0; i < arr.length; i++) {
  if (arr[i]){
   newArr.push(arr[i]);
  }
 }
 return newArr;
}
console.log(filter(["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}]));