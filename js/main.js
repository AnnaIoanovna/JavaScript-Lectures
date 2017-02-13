function test(arg1, arg2) {
	test2.apply(this, arguments);
	return this;
}
function test2(arg1, arg2) {
	console.log(this, arg1, arg2);
}
var obj = {
	name: "slovo",
	test: test
}
var obj2 = {ololo: "trololo"};
//console.log(obj.test());
//console.log(test());

//console.log(test.call(obj2, "arg1", "arg2"));
//console.log(test.apply(obj2, ["arg1", "arg2"]));
test.apply(obj2, ["argument1","argument2"]);

var bindedTest2 = test2.bind(obj2);
bindedTest2("sad", "bad");