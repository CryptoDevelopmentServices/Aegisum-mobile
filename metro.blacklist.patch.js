// metro.blacklist.patch.js

const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = {
  resolver: {
    blockList: exclusionList([
      /.*[\/\\]__fixtures__[\/\\].*/,
      /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
      /website[\/\\]node_modules[\/\\].*/,
      /heapCapture[\/\\]bundle\.js/,
      /.*[\/\\]__tests__[\/\\].*/,
    ])
  }
};
