var maxtime = 1000;
var name = "Math Module";

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


module.exports.subract = subract;
module.exports.modulename = name;
