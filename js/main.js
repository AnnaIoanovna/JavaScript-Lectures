// function test(arg1, arg2) {
// 	test2.apply(this, arguments);
// 	return this;
// }
// function test2(arg1, arg2) {
// 	console.log(this, arg1, arg2);
// }
// var obj = {
// 	name: "slovo",
// 	test: test
// }
// var obj2 = {ololo: "trololo"};
//console.log(obj.test());
//console.log(test());

//console.log(test.call(obj2, "arg1", "arg2"));
//console.log(test.apply(obj2, ["arg1", "arg2"]));
// test.apply(obj2, ["argument1","argument2"]);

// var bindedTest2 = test2.bind(obj2);
// bindedTest2("sad", "bad");

// function bindLate(context, funcName) {
// 	return function() {
// 		return context[funcName].apply(context, arguments);
// 	}	
// }
// var obj = {
// 	method: function(number) {console.log("Old Method" + number )}
// }
// var lateBind = bindLate(obj, "method");
// lateBind(1);
// obj.method = function() {console.log("New Method")}
// lateBind(2);


// function callback(e) {
// 	console.log(this);
// 	console.log(e.target);
// 	console.log(e);
// }
// callback({});
// var body = document.querySelector("body");
// //body.addEventListener("click", callback);

// //$("a").css("display", "none").hide().fadeIn(500);

// var object = {
// 	counter: 0,
// 	increment: function() {
// 		this.counter++;
// console.log(this.counter);
// return this;
// 	},
// 	decrement: function() {
// 		this.counter--;
// console.log(this.counter);
// return this;
// 	},
// callbackCaller: function(callbackForCall) {
// 	callbackForCall.call(this);
// 	callbackForCall();
// 	return this;
// 	}	
// }
// function myCallback() {
// 	console.log(this);
//}

// object.increment();
// object.decrement();
// object.increment();
// object.increment();

// object
// 	.increment()
// 	.decrement()
// 	.increment()
// 	.increment()
// 	.callbackCaller(myCallback);

// function timeout() {
// 	var x = 5;
// 	console.log(x);
// 	x++;
// 	setTimeout(function(){
// 		console.log(x)
// 	}, 1000);
// }
// timeout();
// timeout();

// function event() {
// 	var x = 0;
// 	console.log(x);
// 	body.addEventListener("click", function() {
// 		x++;
// 		console.log(x);
// 	})
// }
// event();

// function closure() {
// 	var x = "a";
// 	console.log(x);
// 	return function(val) {
// 		x+= val;
// 		console.log(x);
// 	}
// }
// // var closuredFunction = closure ();
// // closuredFunction(1);
// // closuredFunction(null);
// // closuredFunction("oloshenki");

// function closure2() {
// 	var array = [];
// 	return  {
// 		addElem: function(elem) {
// 			array.push(elem);
// 			return this;
// 		},
// 		removeElem: function(index) {
// 			array.splice(index, 1);
// 			return this;
// 		},
// 		showStorage: function() {
// 			console.log(array);
// 			return this;
// 		}
// 	}
// }

// var storage = closure2();
// storage
// 	.addElem("text")
// 	.addElem(2)
// 	.showStorage()
// 	.removeElem(1)
// 	.showStorage();

// var storage = closure2();
// storage
// 	.addElem(1)
// 	.addElem(5)
// 	.showStorage()
// 	.removeElem(1)
// 	.showStorage();
// function getType(elem) {
// 	return {}.toString.call(elem);
// }

// console.log

(function(){
	var myAplication = {};
	myAplication.method1 = method1;
	myAplication.method2 = method2;	
	myAplication.method2 = method3;
	myAplication.addMethod = addMethod;

	window.api = myAplication;

	function method1 () {
		console.log("Method 1");
	}

	function method2 () {
		console.log("Method 2");
	}
	function method3 () {
		console.log("Method 3");
	}
	function addMethod(name, func) {
		if (!myAplication[name]) {
			myAplication[name] = func;
		}
		else {
			throw("This method alrady exist");
		}
	}

})();