// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var nodes = [];

  // start from document.body, if node is undefined
  node = node || document.body;

  // check current node for className
  var classes = node.className.split(' ');
  if (classes.indexOf(className) !== -1) {
    nodes.push(node);
  }

  // recursively check child nodes
  _.each(node.children, function(child) {
    nodes = nodes.concat(getElementsByClassName(className, child));
  });

  return nodes;
};
