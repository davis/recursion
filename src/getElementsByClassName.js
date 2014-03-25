// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

// setting parent as document.body, children as the nodelist childNodes
	var results = [];

	var recursive = function(parent) {
		var children = parent.childNodes;
		for(var i = 0; i < children.length; i++) {
			if(children[i].classList && children[i].classList.contains(className)) {
				results.push(children[i]);
			}
			if(children[i].hasChildNodes) {
				for(var j = 0; j < children[i].childNodes.length; j++) {
					recursive(children[i]);
				}
			}
		}
	}

	recursive(document.body);

// some logging
	console.log(results);
	console.log(document.getElementsByClassName(className));
	console.log("-----")


	return results;
};


/* 
	//creating a node I can use later to return a nodelist
		var myNode = document.createElement('results');
		var results = myNode.childNodes;
*/