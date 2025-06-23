const fs = require('fs');
fs.access('readme.md', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('readme.md not found');
    process.exit(1);
  } else {
    console.log('readme.md exists');
  }
});
