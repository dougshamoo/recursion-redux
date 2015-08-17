// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Recursive array case
  if(Array.isArray(obj)){
    var results = [];
    _.each(obj, function(element){
      results.push(stringifyJSON(element));
    });
    return '[' + results.join(',') + ']';
  }
  // recursive object and not null case
  if (obj && typeof obj === 'object') {
    var results = [];
    _.each(obj, function(value, key) {
      if (value === undefined || typeof value === 'function') {
        return;
      }
      var keyResult = stringifyJSON(key);
      var valResult = stringifyJSON(value);
      results.push(keyResult + ":" + valResult);
    });
    return "{" + results.join(',') + "}";
  }
  
  // string base case
  if (typeof obj === 'string') {
    return '"' + obj + '"';   
  }
  
  // everything else base case
  return "" + obj;
};