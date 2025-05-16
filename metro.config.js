const customBlacklist = require('./metro.blacklist.patch.js');
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      ...customBlacklist.resolver,
    },
  };
})();
