var fs = require('fs');

fs.appendFile('demo-fs.-file2-new.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
