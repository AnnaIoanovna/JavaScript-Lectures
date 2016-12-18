"use strict"; //строгий режим написания кода
// alert("Hello world!");
// console.log("Hello console");
// var myCat = "Skif";
// // debugger;
// var MY_CONSTANT = "Svyatik";
// var a = 10;
// myCat = "Kostya";
// // console.log(myCat, a);
// var object = {
// 	name: "Svyatik",
// 	"age": 2
// };
// var array = ["friday", "sat", myCat];

// var name = "age";

// var newObject = object;

// console.log(array);

// console.log(array[0]);

// console.log(object);

// console.log(object[name]);

// console.log(object.age);

// object.age = 3;

// object.toy = "mom";

// console.log(object.age);

// console.log(newObject);


// array["newParam"] = "buhlo";

// console.log(array);

// array[11] = "new elem";

// array.push("eda");

// console.log(array);

// var myFunk = function () {}

// function  newFunction () {
// 	alert(666);
// }

// //funktion is {};
// //array is {};

// newFunction();

// newFunction.newProperty = "text";

// console.log(newFunction.newProperty); 

// function drinking() {
// 	alert (drinking.drink);
// 	return "I want to drink " + drinking.drink;
// }
// drinking.drink = "Buhlo!!!";

// drinking();

// console.log(drinking()); 

// console.log(3 > 5);
// console.log(3 > '5'); 
// console.log(null == undefined);
// console.log(0 == null);
// console.log("5 == '5'", 5 == '5');
// console.log("5 === '5'", 5 === '5');

// console.log(2 == 2 && 3 == 3);

// console.log(2 == 2 && 5 == 3);

// var day = "Friday";

// console.log(day == "Friday" && drinking());

// console.log(day != "Friday" && drinking());

// console.log(day != "Friday" || drinking());

// console.log(!false); 

// console.log(!"text");

// console.log("text");

// console.log(!!"text");

// !"", !0, [], {}, function () {}, true // true
// "", 0, null, undefined, NaN, false // false

//&& - логическое и - приоритет выше
//|| - логическое или 
// ! - логическое не

console.log(1 && 2 || 5 && 6);

console.log(1 && false || false && 6);

console.log('!"sleep" =', !"sleep"); //false

console.log('!0 = ', !0); // true

console.log('!!null =', !!null); // false

var x, y;
x = 5, 6;
y = (5,6);

console.log(x);

//инкремент,декремент
//++ увеличить на единицу
//-- уменьшить на единицу
// Операторы инкремента и декремента МЕНЯЮТ исодную переменную
var x = 10;

x++; // постфикс показывает значение до прибавления

console.log(x);

++x; // префикс показывает значение после прибавления

console.log(x);
console.log(x++, ++x);
console.log(++x, x++);

// Особенности операторов сравнения 

console.log("'x' > 'y' =", 'x' > 'y');

console.log("'x' > 'Y' =", 'x' > 'Y');

console.log("'test' > 'tes' =", 'test' > 'tes');

console.log("'1' > '2' =", '1' > '2');

console.log("'12' > '2' =", '12' > '2');

console.log("+'12' > +'2' =", +'12' > +'2');

// var x = NaN;
// if (typeof x === "number" && x === x) {
// 	console.log(x); // It's number and not a NaN
// };

// var day = "monday";
// console.log( true == 1);
 
//  if (day=="friday") {
//  	console.log("Drink Buhlo");
//  } 
// else {
// 	console.log("Drink tea");
// }


// if (day=="friday") {
// 	console.log("Drink Buhlo"); 
// }
// else if (day=="saturday") {
// 	console.log("Vseravno buhlo");
// }
// else {
// 	console.log("Tea!!!");
// }

var day = "Friday";
switch (day){
	case "Friday":
		alert("Ура, опять бухать!");
		break;
	case "Monday":
		alert("Фуу!!! Опять бодун.");
		break;
	default:	
		alert("Ну как повезет");	
}