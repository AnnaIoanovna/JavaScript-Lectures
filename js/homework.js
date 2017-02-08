 function getRandomInt(min, max) {
 return Math.floor(Math.random()*(max - min + 1)) + min;
}

// function addOpacity(hexColor, opasity) {
// 	 var r = parseInt(hexColor.slice(1, 3), 16),
//          g = parseInt(hexColor.slice(3, 5), 16),
//         b = parseInt(hexColor.slice(5, 7), 16);
//          return "rgba(" + r + ", " + g + ", " + b + ", " + opasity + ")";
// }
// console.log(addOpacity("#324685", 0.8));

// function blockGrower(width, height) {
// 	widthInt = parseFloat(width);
// 	heightInt = parseFloat(height);
// 	widthStr = width.slice(widthInt.toString().length);
// 	heightStr = height.slice(heightInt.toString().length);
// 	widthInt = Math.round(widthInt * 1.5 * 10000)/10000;
// 	heightInt = Math.round(heightInt * 1.5 * 10000)/10000;
	
// 	width = widthInt + widthStr;
// 	height = heightInt + heightStr
// 	return {width, height};
// }
// console.log(blockGrower("3.444%", "5em"));

// function getTwoNumders(min, max) {
// 	var values = [];
// 	for (var i = 0; i < 5; i++) {

// 		values.push(getRandomInt(min, max));
// 	}
// 	console.log(values);
// 	min = values[0];
//   	max = min;
//   for (i = 1; i < values.length; ++i) {
//       if (values[i] > max) max = values[i];
//       if (values[i] < min) min = values[i];
//   }
//   return {min, max};
// }
// console.log(getTwoNumders(44, 99));

// function checkNumberType(number) {
// 	if (parseInt(number) != number) {
// 		return ("float");}
// 	else {
// 		return ("integer");
// 	}	
// }
//  console.log(checkNumberType(99.7));

// function getToRandomPart(string) {
// 	var intFirst = getRandomInt(0, string.length);
// 	var intSec = getRandomInt(intFirst, string.length);
// 	var strPart = string.slice(intFirst, intSec);
// 	console.log(intFirst);
// 	console.log(intSec);
// 	return strPart;
// }

// console.log(getToRandomPart("ghjdslrofdnk"));

// function getTwoSymbols(string) {
// 	var firstInd = getRandomInt(0, string.length-1);
// 	var secInd = getRandomInt(0, string.length-1);
// 	if (secInd == firstInd) {
// 		getRandomInt(0, string.length-1);
// 	}
// 	var sumbolFirst = string.charAt(firstInd); 
// 	var sumbolSecond = string.charAt(secInd);
// 	if (sumbolFirst != sumbolSecond) {
// 		return {sumbolFirst: sumbolFirst, sumbolSecond: sumbolSecond};
// 	}
// 	else return (sumbolFirst);
// }
// console.log(getTwoSymbols("fgiuioFSOISk"));

// function wordRemover(word, string) {
// 	var wd = new RegExp(word, "g");
// 	string = string.replace(wd, "");
// 	return string;
// }
// console.log(wordRemover("cat", "fsdcatoljfcatd"));

// function getObjectsValues(string) {
// 	var res = [];
// 	for (key in string) {
// 		if (typeof string[key] == "object") {
// 			res = res.concat(getObjectsValues(string[key]));

// 		}
// 		else {
// 		res.push(string[key]);
// 		}
// 	}
// 	return res;
// }
// console.log(getObjectsValues({name:"Jon", age:25, animals:{type:"cat", name:"Blohastik", toy:{type:"boll", size: "small"}}}));

function getRequiredSymbols(string, type) {
	var result = "";
	var arr = string.split("");
	var arrtype = [];
	for (var i = 0; i < arr.length; i++) {

		if (!isNaN (parseInt(arr[i])) && type == "number")  {
			arrtype.push(arr[i]);
		}
		if (isNaN(parseInt(arr[i])) && type != "number") {
			arrtype.push(arr[i]);
		}
	}
		result = arrtype.join("");
	
	return result;	
}
console.log(getRequiredSymbols("ajjjdh57kjj764dkfl666", "number"));
console.log(getRequiredSymbols("ajjjdh57kjj764dkfl666", "string"));

function getSostedString(tree) {
	var arr = tree.split("");
	var arrint = [];
	var arrstr = [];
	for (var i = 0; i < arr.length; i++) {
		if (!isNaN (parseInt(arr[i]))) {
			arrint.push(arr[i]);
		}
		if (isNaN (parseInt(arr[i]))) {
			arrstr.push(arr[i]);
		}
	};
	arrint = arrint.sort(function(a,b){
		if (a > b)
			return 1;
		if (a < b)
			return -1;
	});
	arrstr = arrstr.sort(function anyCase(a, b) {
		if (a.toLowerCase() > b.toLowerCase())
 		return 1;
		if (a.toLowerCase() < b.toLowerCase())
  		return -1;
		else
  		return 0;
	});
	var newArr = arrint.concat(arrstr);
	return newArr.join("");
}
console.log(getSostedString("fhus66544albiof"));

function getIntervedNumbers(arrayOfNumber) {
	var newArrayOfNumber = [];
	for (var i = 0; i < arrayOfNumber.length; i++) {
		newArrayOfNumber.push(-arrayOfNumber[i]);
	}
	return newArrayOfNumber;
}
console.log(getIntervedNumbers([-3, -5, -4, 6, 7, 9]));

function getReversedString(string){
		var arr = string.split("");
		arr.reverse();
		return arr.join("");
}

console.log(getReversedString("qwerty"));