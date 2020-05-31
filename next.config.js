const compose = require('next-compose');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');

module.exports = compose([
  [withImages],
  [withLess],
  {
    webpack: (config) => {
      /**some special code */
      return config;
    }
  }
]);
