// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var result;
	if (obj === null) {
		result = "null";
	} else if(typeof(obj) === "number" || typeof(obj) === "boolean") {
		result = obj.toString();
	} else if(typeof(obj) === "string") {
		result = "\"" + obj + "\""; 
	} else if(Array.isArray(obj)) {
		result = "[" + obj.toString() + "]";
	}
	return result;
};







/* 	var string = "";
  		_.each(obj, function(value, key) {
  			string += '"' + key.toString() + '"';
  			string += ':';
  			string += value.toString();
  			string += ',';
  		});
  		
  		if (typeof(obj) === 'object') {
  			string.slice(0,string.length-1)
  		}
*/