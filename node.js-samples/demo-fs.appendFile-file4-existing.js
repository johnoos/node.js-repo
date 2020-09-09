var fs = require('fs');

fs.appendFile('demo-fs.-file4-existing.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
