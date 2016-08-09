var mathModule = require("./math_module");

var handleCallback = function (error,result,time) {
  if(error){
    console.log("Error :" +error.message);
  }
  else{
    console.log("Returned value is:" +result+ "(" +time+ "ms)");
  }
};

console.log("calling subract for 100 and 5");
mathModule.subract(100,5,handleCallback);
console.log("calling subract for 5 and 100");
mathModule.subract(5,100,handleCallback);
console.log("calling subract for 20 and 7");
mathModule.subract(20,7,handleCallback);
console.log("calling subract for 30 and 47");
mathModule.subract(30,47,handleCallback);
console.log("=======================================>>>>>");


console.log("The name variable which is exported "+mathModule.modulename);
