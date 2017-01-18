//Task 1.1

function summ(x, y) {
	return x + y;
}

console.log(summ(2, 5));
console.log(summ(11, 8)); 
console.log(summ(11, "rytfhgf"));

//Task 1.2

function isPositive(x){
	var y = typeof x == "number" && x > 0;
	return y;
}

console.log(isPositive("666"));

//Task 1.3

function toBoolean(x) {
	var result = !!x;
	return result;
}
console.log(toBoolean(""));

//Task 2.1 
function geting(name) {

		if (typeof name == "string" && name) {
			return "Hello, " + name;
		}
		else {
			return "Wrong name";
		}
}
console.log(geting(123)); 

//Task 2.2 
function square(x) {
	if (typeof x == "number") {
		var sqr = Math.pow(x, 2);
		return "Square x = " + sqr; 
	}
	else {
		return "Wrong x";
	}
}
console.log(square(5));
console.log(square(0));
console.log(square("ololo"));

//Task 2.3 
function powerOrNot (x) {
	if (x % 2 == 0) {
		return Math.pow(x, 2);
		 
	}
	if (x % 3 == 0) {
		return Math.pow(x, 3);
		
	}
	return x;
	 
}
console.log(powerOrNot (4));
console.log(powerOrNot (6));
console.log(powerOrNot (5));

//Task 3.1 
function getType(x) {
	if (Array.isArray(x)) {
		return "Array";
	}
	if (x != x) {
		return "NaN";
	}
	if (x == null) {
		return "null";
	}
	return typeof x;
}
console.log(getType("gavno"));
console.log(getType(1));
console.log(getType([]));
console.log(getType([9, 15, "fsf"]));
console.log(getType(Math.sqrt(-1)));
var r;
console.log(getType(r));
console.log(getType(null));

//Task 3.3
function isTruePrimitive(x) {
	var res = typeof x == "number" || typeof x == "string" || typeof x == "boolean" && !!x;  
		if (res == true) {
			return !!x;
		}
	return res;
}
function isTruePrimitive(x) {
	if (x && typeof x !== "object" && typeof x !== "function")
		return true;
	else
		return false;
}
console.log(isTruePrimitive([0]));
console.log(isTruePrimitive(5));
console.log(isTruePrimitive(""));

//Task 4.1

function forSumator(x,y) {
	var summ = 0;
	for (var s = x; s <= y; s++) {
		
		summ = summ + s;
		
	};
	return summ;
}

function forSumator(x,y) {
	var summ = 0;
	for (x; x<=y; x++) {
		summ += x;
	}
}
console.log(forSumator(1,8))

//Task 4.2 
function positiveMultiplier(x, y, z) {
	var p = 1;
	for (var i = y; i <= z; i=i+x) {
		p = p * i;
	}
	return p;
}
console.log(positiveMultiplier(1, 1, 6)); 

//Task 4.3 
function arraySummator(array) {
	var summ = 0;
	for (var i = 0; i < array.length; i++) {
		summ = summ + array[i];
	}
	return summ;
}
console.log(arraySummator([3,5,6,10]));

//Task 4.4
function arrayToConcatString(array) {
	var str = "";
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] == "string") {
			str = str + " " + array[i];			
		}
		
		
	}
	return str;
}
console.log(arrayToConcatString([1,4,"cat","dog"])) ;

//Task 5.1
var matrix = [[1,0,6],
[6,5,2],
[8,4,5]
];
function getPositionOfFive(matrix) {
	var x = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 5) {
				return x;
			}
			x++;
	}
	
 }
}
 console.log(getPositionOfFive(matrix));

//Task 5.2
function getArrayOdds(x, y){
	var arrOdds = [];
	for (var i = x; i <= y; i++) {
		if (i%2 != 0) {
			arrOdds.push(i);
		}
	}
	return arrOdds;
}
console.log(getArrayOdds(5, 10));

Task 6.1 
function summOfFibonachi(x) {
	var a = 1, b = 1; 
		for (var i = 1; i <= x; i++) {
			var c = a + b;
			a = b;
			b = c;
		}
	
	return b;
}
console.log(summOfFibonachi(2)); 

//Task 6.2
function getElementsByType(x,y,z) {
	var n = [];
	for (var i = 0; i < x.length; i++) {
		if (typeof x[i] === y) {
			n.push(x[i]);
			if (n.length >= z) {
				break;
			}
		}
	}
	return n;
}
console.log(getElementsByType([1, 5, "", NaN, true, [8, 10, 30]], "array", 3));

function arrayToObject(array) {
	var keys = [];
	var values = [];
	for (var i = 0; i < array.length; i++) {
		if (getType(array[i]) === "string")
			keys.push(array[i]);
		else
			values.push(array[i]);
	}
	for (var i = 0; i < keys.length; i==) {
		resultObject[keys[i]] = i < values.length ? values[i] : null;
	}
	return resultObject;
}