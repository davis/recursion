// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

// initializing results array
    var results = [];

// implementing using _.each
    var recursive = function(parent) {
      _.each(parent.childNodes, function(value) {
        if(value.classList && value.classList.contains(className)) {
          results.push(value);
        }
        if(value.hasChildNodes) {
          _.each(value.childNodes, function(value) {
            recursive(value);
          });
        }
      });
    }

// call the function on document.body
    recursive(document.body);

// some logging
    console.log(results);
    console.log(document.getElementsByClassName(className));
    console.log("-----")

//? it irks me that results returns an array when the native function returns a live nodeList...
    return results;
};


/*
// meat of the function (old)
    var recursive = function(parent) {
        var children = parent.childNodes;
        for(var i = 0; i < children.length; i++) {
          var child = children[i];
            if(child.classList && child.classList.contains(className)) {  // child has a classList && classList contains className
                results.push(child);
            }
            if(child.hasChildNodes) { // if child has more children, run recursive on each of the children
                for(var j = 0; j < child.childNodes.length; j++) {
                    recursive(child);
                }
            }
        }
    }
*/