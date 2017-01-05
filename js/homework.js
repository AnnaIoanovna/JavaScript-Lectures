var x, y, z;
x = 30;
y = false;
z = "4";
// console.log(typeof (x) == "string" && y == 10 && z >= y);

// console.log((x > 10 || x > y) && (typeof (y) == "number" ||  z % 2 ==0));

// console.log((x+y)%10 == 0 && ((x + y + z)/3 * 2 > 100 ));

// var x = (y%3 == 0) ? y : (z > y) ? z : z + y;

// console.log(x);

//  if (typeof y =="string" ) {
// 	x = y;
// }
//  else if (typeof z =="string" ) {
//  	x = z
//  }

// console.log(x);

// if (y !== false) {
// 	x = "true";
// }
// else x = z;

// console.log(x);

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
// 	x = +(z);
// 	break;
// }
// console.log (x);

// switch (y) {
// 	case 0:
// 	x = y;
	
// 	case false:
// 	x = y;
	
// 	case undefined:
// 	x = y;
	
// 	case null:
// 	x = y;
// 	break;
// 	default:
// 	x = +"z";
	
// }
// console.log (x);

// var arr = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i]){
// 		newArr.push(arr[i]);
// 	}
// }
// console.log (newArr);	
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


var baseArray = [];
var i=1;
for (i==1; i<100; i++) {
	baseArray.push(i);
}
var newArray1 = [];
var newArray2 = [];
var newArray3 = [];

for (baseArray[i]==1; [i] < baseArray.length; i+=3){
	newArray1.push(baseArray[i]);
}

for (baseArray[i]==2; [i] < baseArray.length; i+=3){
	newArray2.push(baseArray[i]);
}
for (baseArray[i]==3; [i] < baseArray.length; i+=3){
	newArray3.push(baseArray[i]);
}
console.log (newArray1);
console.log (newArray2);
console.log (newArray3);
