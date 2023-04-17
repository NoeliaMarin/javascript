const lowercaseMessage = (message) => {
    return message.toLowerCase();
  }
const transform = (message, transformFunction) => {
    return transformFunction(message);
  }
transform('WHY ARE YOU SHOUTING?', lowercaseMessage);

module.exports = lowercaseMessage;

// para llamarlo en node el codigo es:
// const lowercaseMessage = require('./lowercaseMessage');