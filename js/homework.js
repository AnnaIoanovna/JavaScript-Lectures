// var x, y, z;
// x = 30;
// y = false;
// z = "4";

// //1
// console.log(typeof (x) == "string" && y == 10 && z >= y);

// //2
// console.log((x > 10 || x > y) && (typeof (y) == "number" ||  z % 2 ==0));

// //3
// console.log((x+y)%10 == 0 && ((x + y + z)/3 * 2 > 100 ));

// //4
// var x = (y%3 == 0) ? y : (z > y) ? z : z + y;

// console.log(x);

// //5

//  if (typeof y !== "number" && y !== null) {
// 	x = y;
// }
//  else if (typeof z !== "number" && z !== null) {
//  	x = z
//  }

// console.log(x);

// //6

// if (y !== false) {
// 	x = "true";
// }
// else x = z;

// console.log(x);

// //7

// switch (y) {
// 	case 0:
// 	x = y;
// 	break;
// 	case false:
// 	x = y;
// 	break;
// 	case undefined:
// 	x = y;
// 	break;
// 	case null:
// 	x = y;
// 	break;
// 	default:
// 	x = +z;
// 	break;
// }
// console.log (x);

// //8

// switch (y) {
// 	case 0:
	
// 	case false:
		
// 	case undefined:
		
// 	case null:
// 	x = y;
// 	break;
// 	default:
// 	x = +z;
	
// }
// console.log (x);

// //9

// var arr = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i]){
// 		newArr.push(arr[i]);
// 	}
// }
// console.log (newArr);	

// //10
// var newArr1 = [];
// var j = 0;
// while (j < arr.length) {
// 	if (arr[j]){
// 		newArr1.push(arr[j]);
// 	}
// j++;	
// }
// console.log (newArr1);	

// if(){

// }else if(){}


//11

var baseArray = [];

for (var i = 1; i<100; i++) {
	baseArray.push(i);
}
var newArray1 = [];
var newArray2 = [];
var newArray3 = [];

var count = 0;

for (var i = 0; i < baseArray.length; i++){
	count++
	if (count == 1) {
	newArray1.push(baseArray[i]);}
	else if  (count == 2) {
	newArray2.push(baseArray[i]); }
	else if  (count == 3) {
	newArray3.push(baseArray[i]);
	count = 0}
}


console.log (newArray1);
console.log (newArray2);
console.log (newArray3);
