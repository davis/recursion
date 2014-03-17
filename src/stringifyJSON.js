// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var result;
	if(obj === null) {
		result = 'null';
	} else if(typeof obj === 'string') {
		result = '"' + obj + '"';
	} else if(Array.isArray(obj)) {
		var arr = [];
		_.each(obj, function(value) {
			arr.push(stringifyJSON(value));
		});
		result = '[' + arr + ']';
	} else if(typeof obj === 'object') {
		var object = [];
		_.each(obj, function(value, key) {
			if(typeof value !== 'function' &&
			   typeof key   !== 'function' &&
			   typeof value !== 'undefined' &&
			   typeof key   !== 'undefined') {
				object.push(stringifyJSON(key) + ':' + stringifyJSON(value));
			}
		});
		result = '{' + object + '}';
	} else {
		result = obj;
	}
	return result.toString();
};

	/* if(obj === null) {
		return 'null';
	} else if(typeof(obj) === 'boolean') {
		console.log(obj);
		return obj;
	} else if(typeof(obj) === 'number') {
		console.log(obj);
		return obj;
	} else if(typeof(obj) === 'string') {
		console.log("'" + obj + "'");
		return '"' + obj + '"';
	} else if(Array.isArray(obj)) {
		var arr = [];
		_.each(obj, function(value, key) {
			arr.push(stringifyJSON(value));
		});
		console.log(arr);
		return arr;
	} */





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