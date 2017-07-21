const fs = require('fs');

fs.readFile('prototype.html', function(err,contents){
  console.log(contents);
});
