const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions.push('.web.tsx', '.web.ts');
    return config;
  },
};
