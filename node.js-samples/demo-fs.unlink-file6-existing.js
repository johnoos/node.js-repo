var fs = require('fs');

fs.unlink('demo-fs.-file6-existing.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
