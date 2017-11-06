/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var funFunFunc = require('./promiseConstructor');
var other = require('./promisification');




var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return funFunFunc.pluckFirstLineFromFileAsync(readFilePath)
  .then(username => {
    console.log('This is the username: ', username);
    return other.getGitHubProfileAsync(username);
  })
  .then(body => {
    console.log('This is the body: ', JSON.stringify(body));
    console.log('This is data type of body: ', typeof body);
    fs.writeFile(writeFilePath, JSON.stringify(body));
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
