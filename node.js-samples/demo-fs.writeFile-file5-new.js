var fs = require('fs');

fs.writeFile('demo-fs.-file5-new.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
