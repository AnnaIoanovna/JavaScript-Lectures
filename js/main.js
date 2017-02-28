(function () {
 var modules = {};
 var api = {};
 api.addModule = addModule;
 api.getModule = getModule;
 api.addMethod = addMethod;
 
 window.api = api;
 
 function addModule(name, module) {
  if (modules[name]) {
   throw("This module already exist");
  }
  else {
   var fn = new Function("return function "+name+"(){}")();
   fn.prototype = module;
   modules[name] = fn;
  }
 }
 
 function getModule(name) {
  if (modules[name]) {
   return new modules[name]();
  }
  else {
   throw("This module does not exist");
  }
 }

 function addMethod(moduleName, name, func) {
  if (!modules[moduleName]) {
   throw("This module does not exist");
  }
  else if (modules[moduleName].prototype[name]) {
   throw("This method already exist");
  }
  else {
   modules[moduleName].prototype[name] = func;
  }
 }
})();