var maxtime = 1000;


var subract = function(large, small, callback) {
  var waitTime = Math.floor(Math.random()*(maxtime+1));
  if(large < small){
    setTimeout(function() {
      callback(new Error("Negative Result error"));
    },waitTime);
  }else{
    setTimeout(function() {
      callback(null, large-small,waitTime);
    },waitTime);
  }

};

var handleCallback = function (error,result,time) {
  if(error){
    console.log("Error :" +error.message);
  }
  else{
    console.log("Returned value is:" +result+ "(" +time+ "ms)");
  }
};

console.log("calling subract for 100 and 5");
subract(100,5,handleCallback);
console.log("calling subract for 5 and 100");
subract(5,100,handleCallback);
console.log("calling subract for 20 and 7");
subract(20,7,handleCallback);
console.log("calling subract for 30 and 47");
subract(30,47,handleCallback);
console.log("=======================================>>>>>");
