/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) { callback(err); }
    // split the text content based on line
    let contArr = content.split('\n');
    // call callback with first line
    callback(err, contArr[0]);
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
