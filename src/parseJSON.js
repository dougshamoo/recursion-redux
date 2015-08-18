// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json, idx) {
  // function for getting the next ch
  
  idx = idx || 0;
  var ch = json[idx];

  var next = function() {
    idx++;
    ch = json[idx];
  }

  // handle arrays []
  

  // handle objects {}


  // handle strings " "

 
  // handle booleans (have to spell out)


  // handle numbers
  if (ch >= '0' && ch <= '9') {
    
  }


  // null / undefined (have to spell out)

  // checks ch and calls appropriate function
  
};
