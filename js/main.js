(function(){
	var modules = {};
	var ourAwesomeApi = {};
	ourAwesomeApi.addModule = addModule;
	ourAwesomeApi.getModule = getModule;
	ourAwesomeApi.addMethod = addMethod;
	function addModule(name, module){};
	function addMethod(moduleName, name, method) {};
	function getModule(name) {};
	window.api = ourAwesomeApi;
})();

function addModule(name, module) {
	if(modules[name]){
		throw("Module alredy exist");
	}
	else {
		var fn = new Function("return function " + name + "(){}")();
		fn.prototype = module;
		modules[name] = fn;
	}
}

function addMethod(moduleName, name, method) {
	if(!modules[name]){
		throw("Module alredy exist");
	}
	else if (modules[name].prototype[name]){
		throw("Method alredy exist");
	}
	else {
		modules[name].prototype[name] = method;
	}
}

function getModule(name) {
	if(modules[name]) {
		return new modules[name](); 
	}
	else {
		throw("Module does not exist");
	}
} 