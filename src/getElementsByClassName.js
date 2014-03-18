// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	for(i = 0; i < document.body.childNodes.length; i++) {
			if(document.body.childNodes[i].classList)
				if(document.body.childNodes[i].classList.contains(className)) {
				console.log(document.body.childNodes[i] + i);
				results.push(document.body.childNodes[i]);
		}
	}
	return results;
};
