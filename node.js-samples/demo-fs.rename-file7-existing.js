var fs = require('fs');

fs.rename('demo-fs.-file7-existing.txt', 'demo-fs.-file7-renamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
