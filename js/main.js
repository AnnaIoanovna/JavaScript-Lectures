//Функциональное наследование
// function Pet(name) {
// 	var name = name;
// 	this.getName = function(){
// 		return name;
// 	} 
// 	//return this;
// }
// var myCat = new Pet("Tom");
// var myDog = new Pet("Bobik");
// var myParrot = new Pet("Kesha");
// console.log(myCat.getName());
// console.log(myDog.getName());
// console.log(myParrot.getName());
// console.log(myCat);

// function Cat(name) {
// 	this._name = name;
// 	Pet.apply(this, arguments);
// 	this.say = function(){
// 		return "Meouuu!!!";
// 	}
// }

// function CatV2(name) {
// 	this._name = name;
// 	Pet.apply(this, arguments);
// 	var oldGetName = this.getName;
// 	this.getName = function () {
// 		return "Cat "+ oldGetName();
// 	}
// 	this.say = function(){
// 		return "Meouuu!!!";
// 	}
// }

// var cat2 = new CatV2("Barsic");
// console.log(cat2.getName());
// console.log(cat2.say());
// console.log(cat2);

//Прототипное наследование

// function Mashine(power) {
// 	var name = "ololo"
// 	this._power = power;
// }
// Mashine.prototype = {
// 	getName: function(){
// 		return name;
// 	},
// 	getPower: function(){
// 		return this._power;
// 	}
// }
// var newMashine = new Mashine(500);
// console.log(newMashine.getPower());
// console.log(newMashine.getName());

// function Kettle(power, capasity) {
// 	Mashine.apply(this, arguments);
// 	this._waterAmout = 0;
// 	this._capasity = capasity;
// }
// Kettle.prototype = Object.create(Mashine.prototype);
// Kettle.prototype.setWaterAmout = function(value) {
// 	this._waterAmout += value;
// 	if (this._waterAmout > this._capasity) {
// 		var doropppedWater = this._waterAmout - this._capasity;
// 		this._waterAmout = this._capasity;
// 		alert("You dropped " + doropppedWater +" litters of water");
// 	}
// }

// Kettle.prototype.getWaterAmout = function() {
// 	return this._waterAmout;
// }
// var newKettle = new Kettle(2000, 2);
// console.log(newKettle.getPower());
// console.log(newKettle.getWaterAmout());
// newKettle.setWaterAmout(1);
// console.log(newKettle.getWaterAmout());
// newKettle.setWaterAmout(4);
// console.log(newKettle.getWaterAmout());

// function KettleBosh(power, capasity) {
// 	Kettle.apply(this, arguments);
// }
// KettleBosh.prototype = Object.create(Kettle.prototype);
// KettleBosh.prototype.getPower = function() {
// return Kettle.prototype.getPower.call(this) + " Watt";
// }
// var bosh = new KettleBosh(1500, 1);
// console.log(bosh.getPower());
// console.log(bosh.getWaterAmout());

// var FactoryMethods = {
// 	getName: function() {
// 		return this._name;
// 	}
// }
// function Factory(name, age, sphere) {
// 	this._name = name;
// 	this._age = age;
// 	this._sphere = sphere;
// 	return this;

// }
// function ClothFactory(name, age, sphere) {
// 	var object = Object.create(FactoryMethods);
// 	Factory.apply(object, arguments);
// 	return object;
// }

// var newFactory = ClothFactory("Abibas");
// console.log(newFactory.getName());

// var obj = {};

// console.log(obj.__proto__);

// var arr = [];
// console.log(arr.__proto__); 
function Constructor (name, age) {
	this.name = name;
	this.age = age;

}
Constructor.prototype = {
	getName: function () {
		return this.name;
	},
	getAge: function () {
	return this.age;
	}
}
var item = new Constructor("Name", 25);
var item2 = new Constructor("Name2", 25);
var item225 = new Constructor("Name225", 25);

console.log(item);
console.log(item2);
console.log(item225);

console.log([].insanceof Array);