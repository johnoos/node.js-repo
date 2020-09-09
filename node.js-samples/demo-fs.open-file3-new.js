var fs = require('fs');

fs.open('demo-fs.-file3-new.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
